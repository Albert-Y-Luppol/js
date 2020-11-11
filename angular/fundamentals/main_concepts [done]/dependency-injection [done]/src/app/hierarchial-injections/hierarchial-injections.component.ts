import { Component, Host, OnInit, Optional } from '@angular/core';

import { OptionalService } from './services/optional.service';

@Component({
  selector: 'app-hierarсhial-injections',
  templateUrl: './hierarchial-injections.component.html',
  styleUrls: ['./hierarchial-injections.component.scss'],
})
export class HierarchialInjectionsComponent implements OnInit {

  constructor(@Optional() public optional?: OptionalService,
  ) {
    console.log(optional);
  }

  ngOnInit(): void {
  }

}
