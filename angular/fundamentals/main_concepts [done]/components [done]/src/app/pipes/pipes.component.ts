import { Component, OnInit } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  birthday = new Date(1995, 5, 20);
  dateToggle = true;
  expCalcNum = 0;
  expCalcExp = 0;

  message$: Observable<String>;

  private massages = ['Hey!', 'I need a friend!', 'Will you be my friend?'];

  constructor() {
    this.resend();
  }

  ngOnInit(): void {}

  get format() {
    return this.dateToggle ? 'shortDate' : 'fullDate';
  }

  toggleDateFormat() {
    this.dateToggle = !this.dateToggle;
  }

  resend() {
    this.message$ = interval(1000).pipe(
      map((i) => this.massages[i]),
      take(this.massages.length)
    );
  }
}
