import { Component } from '@angular/core';

@Component({
  selector: 'spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.scss'],
})
export class SpyComponent {
  heroNum: number = 1;
  heroes: string[] = ['Joe', 'Tom', 'Rom', 'Jack'];
  addHero(hero) {
    this.heroes.push(hero);
  }

  resetHeroes() {
    this.heroes = [];
  }
}
