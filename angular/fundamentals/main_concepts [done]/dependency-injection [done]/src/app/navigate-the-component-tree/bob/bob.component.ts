import {Component, forwardRef, Optional, SkipSelf} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
  selector: 'bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.scss'],
  providers: [{provide: Parent, useExisting: forwardRef(()=>BobComponent)}]
})
export class BobComponent implements Parent {

  name = 'Bob';

  constructor(@Optional() @SkipSelf() public parent: Parent) { }
}
