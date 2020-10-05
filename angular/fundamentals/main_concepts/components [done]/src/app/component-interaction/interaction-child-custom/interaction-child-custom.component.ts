import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interaction-child-custom',
  templateUrl: './interaction-child-custom.component.html',
  styleUrls: ['./interaction-child-custom.component.scss'],
})
export class InteractionChildCustomComponent {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(newName) {
    console.log(
      `Change detectect in name input!\n From ${this._name} to ${newName}`
    );
    this._name = newName;
  }

  private _name: string;
}
