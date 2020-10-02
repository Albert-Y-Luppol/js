import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSwitchDirective]'
})
export class SwitchDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
