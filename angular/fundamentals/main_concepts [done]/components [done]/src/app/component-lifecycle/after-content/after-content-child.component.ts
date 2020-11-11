import { Component } from '@angular/core';

@Component({
  selector: 'after-content-child',
  template: `<input [(ngModel)]="hero" />`,
})
export class AfterContentChild {
  hero = 'Santa';
}
