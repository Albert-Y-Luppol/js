import { Component, OnInit, OnDestroy } from '@angular/core';

import { fromEvent } from 'rxjs';
import { scan, throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit, OnDestroy {

  constructor() { }

  private subscription: any;

  ngOnInit(): void {
    //js

    //count clicks
    // let countJS = 0;
    // document.addEventListener('click', () => console.log(`Clicked js way! ${++countJS} times`));

    //allow 1 click per second
    // let countClicks = 0;
    // let clickRate = 1000;
    // let lastClick = Date.now() - clickRate;
    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick > clickRate) {
    //     console.log(`Clicked ${++countClicks} times with js.`);
    //     lastClick = Date.now();
    //   }
    // });

    //mouse position
    // let countClicks = 0;
    // let clickRate = 1000;
    // let lastClick = Date.now() - clickRate;
    // document.addEventListener('click', (event) => {
    //   if (Date.now() - lastClick > clickRate) {
    //     console.log(`Clicked ${++countClicks} times with js. (${event.clientX}; ${event.clientY})`);
    //     lastClick = Date.now();
    //   }
    // });

    //rxjs

    //count clicks
    // fromEvent(document, 'click').pipe(scan(count => count + 1, 0)).subscribe((count) => console.log(`Clicked rxjs way! ${count} times`));

    //allow 1 click per second
    // fromEvent(document, 'click').pipe(throttleTime(1000), scan(count => count + 1, 0)).subscribe(count => console.log('clicked rxjs way ', count, ' times'));

    //mouse position
    this.subscription = fromEvent(document, 'click').pipe(throttleTime(1000), map((e: any) => `(${e.clientX};${e.clientY})`), scan((accum, coordiantesCurrent) => {
      accum.count++;
      accum.coordinates = coordiantesCurrent;
      return accum;
    }, { count: 0, coordinates: "" })).subscribe((data) => console.log(`Clicked ${data.count} times with rxjs.`, data.coordinates));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
