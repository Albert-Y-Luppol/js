import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-interaction-onchange',
  templateUrl: './child-interaction-onchange.component.html',
  styleUrls: ['./child-interaction-onchange.component.scss'],
})
export class ChildInteractionOnchangeComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;

  public changeLog: string[] = [];

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = changedProp.currentValue;
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of "${propName}" set to ${to}`);
      } else {
        const from = changedProp.previousValue;
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
