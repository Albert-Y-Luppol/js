import {Component, forwardRef, OnInit} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
  selector: 'alice',
  templateUrl: './alice.component.html',
  styleUrls: ['./alice.component.scss'],
  providers: [{provide: Parent, useExisting: forwardRef(()=>AliceComponent)}]
})
export class AliceComponent implements Parent{
  name = 'Alice';

  constructor() { }

}
