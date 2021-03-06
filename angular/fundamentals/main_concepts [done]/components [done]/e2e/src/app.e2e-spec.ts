import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';

describe('workspace-project App', () => {
  // let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });

  console.clear();

  const heroNames = ['Dr Q', 'Magneta', 'Bombasto'];
  const masterName = 'Albert';
  browser.get('./component-interaction');

  it('should pass properties to children properly', () => {
    const parent = element.all(by.tagName('app-interaction-parent')).get(0);
    const heroes = parent.all(by.tagName('app-interaction-child'));

    for (let i = 0; i < heroNames.length; i++) {
      const childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      const childDetail = heroes.get(i).element(by.tagName('p')).getText();
      expect(childTitle).toEqual(heroNames[i] + ' says:');
      expect(childDetail).toContain(masterName);
    }
  });

  it('should display trimmed, non-empty names', () => {
    const nonEmptyNameIndex = 0;
    const nonEmptyName = '"Dr IQ"';
    const parent = element
      .all(by.tagName('app-interaction-setter-parent'))
      .get(0);
    const hero = parent
      .all(by.tagName('app-interaction-setter-child'))
      .get(nonEmptyNameIndex);

    const displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(nonEmptyName);
  });

  it('should replace empty name with default name', () => {
    const emptyNameIndex = 1;
    const defaultName = '"<no name set>"';
    const parent = element
      .all(by.tagName('app-interaction-setter-parent'))
      .get(0);
    const hero = parent
      .all(by.tagName('app-interaction-setter-child'))
      .get(emptyNameIndex);

    const displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(defaultName);
  });

  it('should set expexted initial values', () => {
    const actual = getActual();
    const initialLabel = 'Version 1.0';
    const initialLog =
      'Initial value of "major" set to 1, Initial value of "minor" set to 0';

    expect(actual.label).toBe(initialLabel);
    expect(actual.count).toBe(1);
    expect(actual.logs.get(0).getText()).toBe(initialLog);
  });

  it('should set expected values after clicking "Minor" twice', () => {
    const repoTag = element(by.tagName('app-input-with-onchange'));
    const newMinorBtn = repoTag.all(by.tagName('button')).get(1);

    newMinorBtn.click().then(() => {
      newMinorBtn.click().then(() => {
        const actual = getActual();

        const labelAfter2Minor = 'Version 1.2';
        const logAfter2Minor = 'minor changed from 1 to 2';

        expect(actual.label).toBe(labelAfter2Minor);
        expect(actual.count).toBe(3);
        expect(actual.logs.get(2).getText()).toBe(logAfter2Minor);
      });
    });
  });

  it('should set expected values after clicking "Major" once', () => {
    const repoTag = element(by.tagName('app-input-with-onchange'));
    const majorBtn = repoTag.all(by.tagName('button')).get(0);

    majorBtn.click().then(() => {
      const actual = getActual();

      expect(actual.label).toBe('Version 2.0');
      expect(actual.count).toBe(4);
      expect(actual.logs.get(3).getText()).toBe(
        'major changed from 1 to 2, minor changed from 2 to 0'
      );
    });
  });

  function getActual() {
    const versionTag = element(by.tagName('app-child-interaction-onchange'));
    const label = versionTag.element(by.tagName('h3')).getText();
    const ul = versionTag.element(by.tagName('ul'));
    const logs = ul.all(by.tagName('li'));

    return {
      label,
      logs,
      count: logs.count(),
    };
  }

  it('should not emit the event initially', () => {
    const voteLabel = element(by.tagName('app-parent-listen-child-vote-taker'))
      .element(by.tagName('h4'))
      .getText();
    expect(voteLabel).toBe('Agree: 0, Disagree: 0');
  });

  it('should process Agree vote', () => {
    const firstAgreeBtn = element
      .all(by.tagName('app-parent-listen-child-child'))
      .get(0)
      .all(by.tagName('button'))
      .get(0);
    firstAgreeBtn.click().then(() => {
      const voteLabel = element(
        by.tagName('app-parent-listen-child-vote-taker')
      )
        .element(by.tagName('h4'))
        .getText();
      expect(voteLabel).toBe('Agree: 1, Disagree: 0');
    });
  });

  it('should process Disagree vote', () => {
    const secondDisagreeBtn = element
      .all(by.tagName('app-parent-listen-child-child'))
      .get(1)
      .all(by.tagName('button'))
      .get(1);
    secondDisagreeBtn.click().then(() => {
      const voteLabel = element(
        by.tagName('app-parent-listen-child-vote-taker')
      )
        .element(by.tagName('h4'))
        .getText();
      expect(voteLabel).toBe('Agree: 1, Disagree: 1');
    });
  });

  it('timer and parent seconds should match', () => {
    const parent = element(by.tagName('app-interaction-via-local-variables'));
    const message = parent
      .element(by.tagName('app-interaction-countdown-timer'))
      .getText();
    browser.sleep(1100);
    const seconds = parent
      .element(by.className('interaction__seconds'))
      .getText();
    expect(message).toContain(seconds);
  });

  it('should stop the countdown', () => {
    const parent = element(by.tagName('app-interaction-via-local-variables'));
    const stopBtn = parent.all(by.tagName('button')).get(1);

    stopBtn.click().then(() => {
      const message = parent
        .element(by.tagName('app-interaction-countdown-timer'))
        .getText();
      expect(message).toContain('Holding');
    });
  });

  it('should announce a mission', () => {
    const missionControl = element(by.tagName('app-mission-control'));
    const announceButton = missionControl.all(by.tagName('button')).get(0);
    announceButton.click().then(() => {
      const history = missionControl.all(by.tagName('li'));
      expect(history.count()).toBe(1);
      expect(history.get(0).getText()).toMatch(/Mission.* announced/);
    });
  });

  it('should confirm the mission by Lovell', () => {
    testConfirmMission(1, 2, 'Lovell');
  });

  it('should confirm the mission by Haise', () => {
    testConfirmMission(3, 3, 'Haise');
  });

  it('should confirm the mission by Swigert', () => {
    testConfirmMission(2, 4, 'Swigert');
  });

  function testConfirmMission(
    buttonIndex: number,
    expectedLogCount: number,
    astronaut: string
  ) {
    const confirmedLog = ' confirmed the mission';
    const missionControl = element(by.tagName('app-mission-control'));
    const confirmButton = missionControl
      .all(by.tagName('button'))
      .get(buttonIndex);
    confirmButton.click().then(() => {
      const history = missionControl.all(by.tagName('li'));
      expect(history.count()).toBe(expectedLogCount);
      expect(history.get(expectedLogCount - 1).getText()).toBe(
        astronaut + confirmedLog
      );
    });
  }
  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(
  //     jasmine.objectContaining({
  //       level: logging.Level.SEVERE,
  //     } as logging.Entry)
  //   );
  // });
});
