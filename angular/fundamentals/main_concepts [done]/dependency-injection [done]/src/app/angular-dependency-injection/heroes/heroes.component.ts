import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heroes',
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `,
  providers: [HeroService]
})
export class HeroesComponent { }