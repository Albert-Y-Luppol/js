import { Component, OnInit } from '@angular/core';

import { OldLogger } from '../services/old-logger.service';
import { NewLogger } from '../services/new-logger.service';

@Component({
  selector: 'app-aliased-class',
  templateUrl: './aliased-class.component.html',
  styleUrls: ['./aliased-class.component.scss'],
  providers: [NewLogger, { provide: OldLogger, useExisting: NewLogger }]  //dont create a new instance of NewLogger(as do useClass), but use provided one.
})
export class AliasedClassComponent implements OnInit {

  constructor(private readonly oldLogger: OldLogger) { }

  ngOnInit(): void {
    this.oldLogger.log('The simple msg!')
  }

}
