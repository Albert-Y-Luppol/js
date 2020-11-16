import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Hero} from "../../interfaces/hero";
import {HeroService} from "./hero.service";


@Component({
  selector: 'app-accessing-query-params',
  templateUrl: './accessing-query-params.component.html',
  styleUrls: ['./accessing-query-params.component.scss']
})
export class AccessingQueryParamsComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  heroId: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params=>{
        this.heroId = Number(params.get('id'));
        return this.heroService.getHeroes();
      })
    );
  }

}
