import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-vars',
  templateUrl: './template-ref-vars.component.html',
  styleUrls: ['./template-ref-vars.component.scss'],
})
export class TemplateRefVarsComponent implements OnInit {
  submitMessage: string = 'Please enter name!';
  constructor() {}

  ngOnInit(): void {}

  callPhone(number): void {
    alert('Calling: ' + number);
  }

  onSubmit(form) {
    console.dir(form, { depth: null });
  }
}
