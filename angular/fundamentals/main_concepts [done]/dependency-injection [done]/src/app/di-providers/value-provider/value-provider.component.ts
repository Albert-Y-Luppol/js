import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig } from './app-config.interface';

import { APP_DI_CONFIG, APP_CONFIG } from './app.config';

@Component({
  selector: 'app-value-provider',
  templateUrl: './value-provider.component.html',
  styleUrls: ['./value-provider.component.scss'],
  providers: [{ provide: APP_CONFIG, useValue: APP_DI_CONFIG }]
})
export class ValueProviderComponent implements OnInit {

  constructor(@Inject(APP_CONFIG) private readonly config: AppConfig) { }

  ngOnInit(): void {
    console.log('Inject value: ', this.config);
  }

}
