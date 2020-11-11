import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from './services/hero.service';
import { Hero, HeroTaxReturn } from './hero';

@Component({
  selector: 'app-multiple-edit-session',
  templateUrl: './multiple-edit-session.component.html',
  styleUrls: ['./multiple-edit-session.component.scss'],
  providers: [HeroService]
})
export class MultipleEditSessionComponent {
  public heroes: Observable<Hero[]>;
  public selectedTaxReturn: HeroTaxReturn[] = [];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  showTaxReturn(hero: Hero) {
    this.heroService.getTaxReturn(hero).subscribe(htr => {
      if (!this.selectedTaxReturn.find(tr => tr.id == htr.id)) {
        this.selectedTaxReturn.push(htr);
      }
    });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturn.splice(ix, 1);
  }

}
