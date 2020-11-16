import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Hero} from "../../../interfaces/hero";
import {Observable} from "rxjs";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero$: Observable<Hero>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));
    this.hero$ = this.heroService.getHero(heroId);
  }

  gotoHeroes(hero: Hero){
    const heroId = hero? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId}]);
  }
}
