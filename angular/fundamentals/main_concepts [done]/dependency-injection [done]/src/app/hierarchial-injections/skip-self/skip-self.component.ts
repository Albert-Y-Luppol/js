import { Component, OnInit, Optional, SkipSelf } from '@angular/core';

import { LeafService } from '../services/leaf.service';
import { OptionalService } from '../services/optional.service';

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.scss'],
  providers: [{ provide: LeafService, useValue: { emoji: '🍁' } }, { provide: OptionalService, useValue: { placeOfInjection: 'Element' } }]
})
export class SkipSelfComponent implements OnInit {

  constructor(private readonly elementLeafService: LeafService,
    @SkipSelf() private readonly moduleLeafService: LeafService, private readonly elementOptionalService: OptionalService, @SkipSelf() @Optional() private readonly unexistedOptionalService?: OptionalService) {
    console.log('Element@SkipSelf: ', elementLeafService);
    console.log('Module@SkipSelf: ', moduleLeafService);
    console.log('Element@SkipSelf: ', elementOptionalService);
    console.log('Module@SkipSelf: ', unexistedOptionalService);
  }

  ngOnInit(): void {
  }

}
