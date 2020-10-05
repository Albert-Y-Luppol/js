import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-listen-child-vote-taker',
  templateUrl: './parent-listen-child-vote-taker.component.html',
  styleUrls: ['./parent-listen-child-vote-taker.component.scss'],
})
export class ParentListenChildVoteTakerComponent {
  public agreed = 0;
  public disagreed = 0;
  public voters = ['Narco', 'Celeritas', 'Bombasto'];
  public onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
