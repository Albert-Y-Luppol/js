import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig } from '../app-config.interface';

import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-hierarchy-child-check',
  templateUrl: './hierarchy-child-check.component.html',
  styleUrls: ['./hierarchy-child-check.component.scss']
})
export class HierarchyChildCheckComponent implements OnInit {

  constructor(@Inject(APP_CONFIG) private readonly conf: AppConfig) { }

  ngOnInit(): void {
    console.log('Hirarchy child check: ', this.conf);
  }

}
