import { Component, Input } from '@angular/core';
import { HasErrorState } from '@angular/material/core/common-behaviors/error-state';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.scss'],
})
export class InteractionChildComponent {
  @Input() hero: string;
  @Input('master') masterName: string;
}
