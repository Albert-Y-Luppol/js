import { Component, Optional } from '@angular/core';
import {AlexComponent} from "../alex/alex.component";

@Component({
  selector: 'catchy',
  templateUrl: './catchy.component.html',
  styleUrls: ['./catchy.component.scss']
})
export class CatchyComponent {

  constructor(@Optional() public alex: AlexComponent) { }

}
