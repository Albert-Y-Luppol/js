import { Component, DoCheck, Input } from '@angular/core';

@Component({
  template: `<button (click)="clearLog()">Clear Log</button>
    <ul>
      <li *ngFor="let logMsg of log">{{ logMsg }}</li>
    </ul> `,
  selector: 'do-check',
})
export class DoCheckComp implements DoCheck {
  @Input() heroName: string;
  @Input() heroPowers: string;

  log: string[] = [];
  oldHeroName: string;
  oldPower: string;
  changeDetected: boolean;
  noChangeCount: number = 0;

  ngDoCheck() {
    if (this.heroName !== this.oldHeroName) {
      this.changeDetected = true;
      this.log.push(
        `DoCheck: Hero name changed to "${this.heroName}" from "${this.oldHeroName}"`
      );
      this.oldHeroName = this.heroName;
    }

    if (this.heroPowers !== this.oldPower) {
      this.changeDetected = true;
      this.log.push(
        `DoCheck: Power changed to "${this.heroPowers}" from "${this.oldPower}"`
      );
      this.oldPower = this.heroPowers;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      const count = (this.noChangeCount += 1);
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.log.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.log[this.log.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

  clearLog() {
    this.log = [];
  }
}
