import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-in-templates',
  templateUrl: './svg-in-templates.component.svg',
  styleUrls: ['./svg-in-templates.component.scss'],
})
export class SvgInTemplatesComponent implements OnInit {
  fillColor = 'rgb(200, 105, 255)';

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
