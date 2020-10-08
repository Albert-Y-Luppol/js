import { Component, OnInit } from '@angular/core';
import { ClassObj } from '../../interfaces/build-in-directives';
import { StylesObj } from '../../interfaces/build-in-directives';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss'],
})
export class BuiltInDirectivesComponent implements OnInit {
  currentClasses: ClassObj;
  currentStyles: StylesObj;
  currentItem = { name: 'John' };
  ngForControlBy = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Dom' },
    { id: 4, name: 'Son' },
    { id: 5, name: 'Ron' },
    { id: 6, name: 'Bon' },
  ];

  private _isSpecial: boolean = true;
  get isSpecial() {
    return this._isSpecial;
  }
  set isSpecial(val: boolean) {
    this._isSpecial = val;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  private _canSave = true;
  get canSave() {
    return this._canSave;
  }
  set canSave(val: boolean) {
    this._canSave = val;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  private _isUnchanged = true;
  get isUnchanged() {
    return this._isUnchanged;
  }
  set isUnchanged(val: boolean) {
    this._isUnchanged = val;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  constructor() {}

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      savable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  trackById(item) {
    return item.id;
  }

  changeId(item) {
    this.ngForControlBy.splice(this.ngForControlBy.indexOf(item), 1);
    item.id = Math.round(Math.random() * 100);
    this.ngForControlBy.push(item);
  }
}
