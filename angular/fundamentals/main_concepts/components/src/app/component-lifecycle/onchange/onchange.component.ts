import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  templateUrl: './onchange.component.html',
  selector: 'on-change',
  styleUrls: ['./onchange.component.scss'],
})
export class OnChangesComp implements OnChanges {
  @Input() heroName: string;
  @Input() heroPowers: string;

  log: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const propertKeyName in changes) {
      if (!changes[propertKeyName].firstChange) {
        this.log.push(
          `${changes[propertKeyName]}: currentValue = ${changes[propertKeyName].currentValue}, previousValue = ${changes[propertKeyName].previousValue}`
        );
      }
    }
  }

  clearLog() {
    this.log = [];
  }
}
