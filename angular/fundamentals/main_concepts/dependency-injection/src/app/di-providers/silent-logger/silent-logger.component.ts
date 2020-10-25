import { Component, OnInit } from '@angular/core';

import { Logger } from '../services/logger.service';
import { SilentLogger } from '../services/silentLoggerObj';

@Component({
  selector: 'app-silent-logger',
  templateUrl: './silent-logger.component.html',
  styleUrls: ['./silent-logger.component.scss'],
  providers: [{ provide: Logger, useValue: SilentLogger }]
})
export class SilentLoggerComponent implements OnInit {

  constructor(private readonly logger: Logger) { }

  ngOnInit(): void {
    this.logger.log('Use Value');
  }

}
