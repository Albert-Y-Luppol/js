import {Component, OnInit, Optional} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
  selector: 'carol',
  templateUrl: './carol.component.html',
  styleUrls: ['./carol.component.scss']
})
export class CarolComponent{

  name = 'Carol';

  constructor(@Optional() public parent?: Parent) { }

}
