import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) { console.log('got val: ', x) },
    //   error(err) { console.error('Catched err: ', err) },
    //   complete() { console.log('done') }
    // });
    // console.log('just after subscribe');

    // function foo() {
    //   console.log('Hello!')
    //   return 42;
    // }
    // console.log('before');
    // const x = foo.call(this);
    // console.log(x);
    // console.log('after');
    // const y = foo.call(this);
    // console.log(y);


    // const foo = new Observable(subscriber => {
    //   console.log('Hello');
    //   subscriber.next(42);
    // });

    // console.log('before');
    // foo.subscribe(x => { console.log(x) });
    // console.log('after');
    // foo.subscribe(y => console.log(y));


    //creation (of(), from(), interval())

    // const observable = new Observable(function subscribe(subscriber) {
    //   const id = setInterval(() => {
    //     subscriber.next('hi');
    //   }, 1000);
    // });

    // observable.subscribe(x => console.log('first x: ', x));
    // observable.subscribe(x => console.log('second x: ', x));


    const observable = new Observable(
      function subscribe(subscriber) {
        try {
          subscriber.next(1);
          subscriber.next(2);
          subscriber.next(3);
          setTimeout(() => {
            subscriber.next(4);
            subscriber.next(5)
          }, 1000);
          setTimeout(() => subscriber.next(6), 2000);
          setTimeout(() => subscriber.next(7), 3000);
          // subscriber.complete();

          // subscriber.next('never delivered');
          // throw new Error('Ho-ho');
        } catch (err) {
          subscriber.error(err);
        }

      }
    );

    const subscription = observable.subscribe(x => console.log('first x: ', x));
    const subscrioption2 = observable.subscribe(x => console.log('second x: ', x));

    // const observable = from([10, 20, 30]);
    // const subscription = observable.subscribe(x => console.log(x));
    // subscription.unsubscribe();

    // const observable = new Observable(function subscribe(subscriber) {
    //   const intervalId = setInterval(() => { subscriber.next('Hi') }, 1000);

    //   return function unsubscribe() {
    //     clearInterval(intervalId);
    //   }
    // })

    // const timer = observable.subscribe(x => console.log(x));
    // setTimeout(() => {
    //   timer.unsubscribe();
    // }, 3000);

    //   function subscribe(subscriber) {
    //     const intervalId = setInterval(() => {
    //       subscriber.next('hi');
    //     }, 1000);

    //     return function unsubscribe() {
    //       clearInterval(intervalId);
    //     }
    //   }

    //   const unsubscribe = subscribe({ next: x => console.log(x) });
    //   setTimeout(unsubscribe, 3000);
  }



}
