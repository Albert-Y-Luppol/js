import { Component } from '@angular/core';

@Component({
  selector: 'after-content-parent',
  template: `<after-content>
    <after-content-child></after-content-child>
  </after-content>`,
})
export class AfterContentParent {}
