import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent-listen-child-child',
  templateUrl: './parent-listen-child-child.component.html',
  styleUrls: ['./parent-listen-child-child.component.scss'],
})
export class ParentListenChildChildComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();

  public didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
