import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

 public hero$: Observable<Hero>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero){
    this.router.navigate(['/superheroes', {
      id: hero ? hero.id : null,
      junk: 'For fun!'
    }]);
  }

}
