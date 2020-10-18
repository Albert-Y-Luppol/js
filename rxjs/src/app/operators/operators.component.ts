import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatAll, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const observer = {
      next: (next) => console.log(next),
      error: (err) => console.error(err),
      complete: () => console.log('Complete!')
    }

    //never used
    map((x: number) => x * x)(of(1, 2, 3)).subscribe((v) => console.log('value', v));
    first()(of(1, 2, 3)).subscribe((v) => console.log('value', v));

    //preffered syntax
    of(1, 2, 3).pipe(
      map((x: number) => x * x)
    ).subscribe(x => console.log(x));
    from([1, 2, 3]).pipe(first()).subscribe(x => console.log(x));
    console.log('Observable of observables');
    from([of(1, 2, 3), of(3, 4, 5), of(5, 6, 7), of(7, 8, 9)]).pipe(concatAll()).subscribe(observer);

    //delay operator from inside
    function delay(delayInMillis) {
      return (observable) => new Observable(
        subscriber => {
          const allTimerIDs = new Set();
          const observer = {
            next(value) {
              const timerID = setTimeout(() => {
                subscriber.next(value);
                allTimerIDs.delete(timerID)
              }, delayInMillis);
              allTimerIDs.add(timerID);
            },
            error(err) {
              subscriber.error(err);
            },
            complete() {
              subscriber.complete();
            }
          };
          const subscription = observable.subscribe(observer);

          //don't see need of this - work the same
          return () => {
            subscription.unsubscribe();
            allTimerIDs.forEach((timerID: any) => {
              clearTimeout(timerID);
            })
          }
        }
      );
    }

    const time = Date.now();
    console.log('delay start: ');

    const subscription = new Observable(sub => {
      sub.next('first');
      setTimeout(() => sub.next('init delay 1000'), 1000);
      setTimeout(() => sub.next('init delay 2000'), 2000);
      setTimeout(() => sub.next('init delay 4000'), 4000);
      setTimeout(() => sub.next('init delay 6000'), 6000);
      setTimeout(() => sub.next('init delay 10000'), 10000);
      setTimeout(() => sub.complete(), 13000);
    }).pipe(
      delay(2000)
    ).subscribe(x => console.log(x, ": ", Date.now() - time), err => console.error(err), () => console.log('Complete', Date.now() - time));

    setTimeout(() => {
      subscription.unsubscribe();
      console.log('unsubscribed', Date.now() - time)
    }, 9000);
  }

}
