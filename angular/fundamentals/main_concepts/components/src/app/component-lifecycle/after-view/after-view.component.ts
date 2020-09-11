import {
  Component,
  AfterViewChecked,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ChildViewComp } from './child-view/child-view.component';

@Component({
  selector: 'after-view',
  template: ` <p>{{ comment }}</p>
    <div>-- child view begins --</div>
    <child-view></child-view>
    <div>-- child view ends --</div>
    <ul>
      <li *ngFor="let msg of log; index as i">#{{ i }}: {{ msg }}</li>
    </ul>`,
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  private prevHero = '';

  log: string[] = [];
  comment: string = '';

  @ViewChild(ChildViewComp) viewChild: ChildViewComp;

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
    this.doSomething();
  }
  ngAfterViewChecked() {
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  logIt(text) {
    this.log.push(text);
  }

  doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      setTimeout(() => (this.comment = c), 0);
      this.logIt(c);
    }
  }
}
