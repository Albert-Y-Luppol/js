import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompileTokenMetadata } from '@angular/compiler';

@Component({
  selector: 'app-template-statements',
  templateUrl: './template-statements.component.html',
  styleUrls: ['./template-statements.component.scss'],
})
export class TemplateStatementsComponent implements OnInit {
  heros = [
    { id: 1, name: 'Will', job: 'Dancer' },
    { id: 2, name: 'Will', job: 'Dancer' },
    { id: 3, name: 'Will', job: 'Dancer' },
    { id: 4, name: 'Will', job: 'Dancer' },
  ];
  joe = 'Tom';

  constructor() {}

  ngOnInit(): void {}

  remove(hero) {
    this.heros.splice(this.heros.indexOf(hero), 1);
  }

  onSave(e) {
    console.log(e);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(this.joe);
  }
}
