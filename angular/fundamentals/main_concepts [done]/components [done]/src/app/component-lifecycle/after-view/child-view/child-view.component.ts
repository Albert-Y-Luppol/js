import { Component } from '@angular/core';

@Component({
  selector: 'child-view',
  template: '<input [(ngModel)]="hero">',
})
export class ChildViewComp {
  hero = 'Santa';
}
