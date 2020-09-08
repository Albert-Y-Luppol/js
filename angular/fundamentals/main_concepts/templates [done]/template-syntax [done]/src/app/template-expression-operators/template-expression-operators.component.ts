import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-expression-operators',
  templateUrl: './template-expression-operators.component.html',
  styleUrls: ['./template-expression-operators.component.scss'],
})
export class TemplateExpressionOperatorsComponent implements OnInit {
  date: Date = new Date();
  item = {};
  constructor() {}

  ngOnInit(): void {}
}
