import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-cl-style-binding',
  templateUrl: './attr-cl-style-binding.component.html',
  styleUrls: ['./attr-cl-style-binding.component.scss'],
})
export class AttrClStyleBindingComponent implements OnInit {
  public actionName = 'The lable attr for the button';
  public bindClass = true;
  public classString = 'binding__bar binding__decoration';
  public classObj = {
    binding__bar: false,
    binding__decoration: true,
  };

  public widthRem = 3;
  public styleString = 'width: 4rem; border: 1px solid yellow';
  public styleObj = {
    width: '5rem',
    border: '1px solid orange',
  };

  constructor() {}

  ngOnInit(): void {}

  toggleBindClass() {
    this.bindClass = !this.bindClass;
  }
}
