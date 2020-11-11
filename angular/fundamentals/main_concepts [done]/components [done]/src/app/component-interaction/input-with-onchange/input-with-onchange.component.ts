import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-onchange',
  templateUrl: './input-with-onchange.component.html',
  styleUrls: ['./input-with-onchange.component.scss'],
})
export class InputWithOnchangeComponent {
  major: number = 1;
  minor: number = 0;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
