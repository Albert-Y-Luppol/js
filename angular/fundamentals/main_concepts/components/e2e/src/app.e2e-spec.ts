import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';

describe('workspace-project App', () => {
  // let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });

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
