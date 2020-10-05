import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-setter-parent',
  templateUrl: './interaction-setter-parent.component.html',
  styleUrls: ['./interaction-setter-parent.component.scss'],
})
export class InteractionSetterParentComponent implements OnInit {
  // Displays 'Dr IQ', '<no name set>', 'Bombasto'
  names = ['Dr IQ', '   ', '  Bombasto  '];
  public customName = 'Jim';

  ngOnInit() {
    setTimeout(() => {
      this.names.push('ChangeHero');
      setTimeout(() => {
        this.names[3] = 'HeroChanged';
      }, 3000);
    }, 3000);
  }

  updateCustomName(data: string) {
    this.customName = data;
  }
}
