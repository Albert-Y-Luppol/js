import { Injectable } from '@angular/core';

import { SwitchComponentItem } from './switch-component-item';
import { SwitchLeftComponent } from './switch-left.component';
import { SwitchRightComponent } from './switch-right.component';

@Injectable({
  providedIn: 'root'
})
export class SwitchComponentService {

  getComponents(): SwitchComponentItem[] {
    return [
      new SwitchComponentItem(SwitchLeftComponent, 'Left'),
      new SwitchComponentItem(SwitchRightComponent, 'Right'),
    ];
  }
}
