import { Component, Input } from '@angular/core';
import { SwitchComponentInterface } from './switch-component.interface';

@Component({
  template: `
    <style>:host {
    align-self: flex-start;
}</style>
    <h3 >{{data}}</h3>`
})
export class SwitchLeftComponent implements SwitchComponentInterface {

  @Input() data: any;

}