import { Component, OnInit } from '@angular/core';
import { Logger } from '../services/logger.service';

import { UserLogger } from '../services/user-logger.service'

@Component({
  selector: 'app-class-providers',
  templateUrl: './class-providers.component.html',
  styleUrls: ['./class-providers.component.scss'],
  providers: [{ provide: Logger, useClass: UserLogger }]
})
export class ClassProvidersComponent implements OnInit {

  constructor(private logger: Logger) { }

  ngOnInit(): void {
    this.logger.log('Just init message');
  }

}
