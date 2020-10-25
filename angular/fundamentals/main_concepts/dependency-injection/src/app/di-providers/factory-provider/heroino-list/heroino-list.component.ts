import { Component } from '@angular/core';

import { Hero } from '../../../angular-dependency-injection/heroes/interfaces/hero';
import { HeroinoService } from '../../services/hero.service';

@Component({
  selector: 'app-heroino-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})
export class HeroinoListComponent {
  heroes: Hero[];

  constructor(heroService: HeroinoService) {
    this.heroes = heroService.getHeroes();
  }
}