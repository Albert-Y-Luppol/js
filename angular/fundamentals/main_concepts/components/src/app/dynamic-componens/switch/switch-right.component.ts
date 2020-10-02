import { Component, Input } from '@angular/core';
import { SwitchComponentInterface } from './switch-component.interface';

@Component({
  template: `
  <style>:host {
    align-self: flex-end;
}</style>
    <h3 >{{data}}</h3>`
})
export class SwitchRightComponent implements SwitchComponentInterface {

  @Input() data: any;

}
