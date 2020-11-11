import {Component, Optional} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
  selector: 'chris',
  templateUrl: './chris.component.html',
  styleUrls: ['./chris.component.scss']
})
export class ChrisComponent implements Parent {

  name = 'Chris';

  constructor(@Optional() public parent?: Parent) { }
}
