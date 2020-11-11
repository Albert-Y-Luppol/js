import { Component, Optional} from '@angular/core';
import {Base} from "../alex/alex.component";

@Component({
  selector: 'craig',
  templateUrl: './craig.component.html',
  styleUrls: ['./craig.component.scss']
})
export class CraigComponent{

  constructor(@Optional() public alex: Base) { }

}
