import { Component, OnInit } from '@angular/core';
import { Logger } from './services/logger.service';

import { UserService } from './services/user.service';


@Component({
  selector: 'app-di-providers',
  templateUrl: './di-providers.component.html',
  styleUrls: ['./di-providers.component.scss'],
  providers: [UserService, Logger]
})
export class DiProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
