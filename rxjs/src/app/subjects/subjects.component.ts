import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ConnectableObservable, from, interval, of, ReplaySubject, Subject } from 'rxjs';
import { last, multicast, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //simple ex.

    // const subject = new Subject<number>();

    // subject.subscribe((val) => console.log('observer A: ', val));
    // subject.subscribe((val) => console.log('observer B: ', val))

    // subject.next(1);
    // subject.next(2);

    // const observable = from([11, 22, 33]);

    // observable.subscribe(subject);


    //multicasted import { Observable } from 'rxjs';

    // const source = from([1, 2, 3]);
    // const subject = new Subject();
    // const multicasted: any = source.pipe(multicast(subject));

    // multicasted.subscribe((v) => console.log(`observerA: ${v}`));
    // multicasted.subscribe((v) => console.log(`observerB: ${v}`));

    // multicasted.connect();


    //reference counting manual

    // const source = interval(500);
    // const subject = new Subject();
    // const multicasted: any = source.pipe(multicast(subject));

    // let subscription1, subscription2, subscriptionConnect;

    // subscription1 = multicasted.subscribe({
    //   next: (v) => console.log('observerA: ', v)
    // });

    // subscriptionConnect = multicasted.connect();

    // setTimeout(() => {
    //   subscription2 = multicasted.subscribe({
    //     next: (v) => console.log('observerB: ', v)
    //   })
    // }, 600);

    // setTimeout(() => subscription1.unsubscribe(), 1200)

    // setTimeout(() => {
    //   subscription2.unsubscribe();
    //   subscriptionConnect.unsubscribe();
    // }, 2000);


    //reference counting auto

    // const source = interval(500);
    // const subject = new Subject();
    // const refCounted = source.pipe(multicast(subject), refCount());

    // let subscription1, subscription2;

    // console.log('observerA subscribed');
    // subscription1 = refCounted.subscribe({
    //   next: (v) => console.log('observerA: ', v)
    // });

    // setTimeout(() => {
    //   console.log('observerB subscribed');
    //   subscription2 = refCounted.subscribe({
    //     next: (v) => console.log('observerB: ', v)
    //   })
    // }, 600);

    // setTimeout(() => {
    //   console.log('observerA unsubscribed');
    //   subscription1.unsubscribe()
    // }, 1200)

    // setTimeout(() => {
    //   console.log('observerB unsubscribed');
    //   subscription2.unsubscribe();
    // }, 2000);


    //BehaviourSubject

    // const subject = new BehaviorSubject(0);

    // subject.subscribe((v) => console.log(`observerA: ${v}`));

    // subject.next(1);
    // subject.next(2);

    // subject.subscribe((v) => console.log(`observerB: ${v}`));

    // subject.next(3);


    // ReplaySubject

    // const subject = new ReplaySubject(3);

    // subject.subscribe({ next: (v) => console.log(`observerA: ${v}`) });

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);

    // subject.subscribe({ next: (v) => console.log(`observerB: ${v}`) });

    // subject.next(5);


    //replaySubject with window time

    // const subject = new ReplaySubject(100, 500 /* windowTime */);

    // subject.subscribe((v) => console.log(`observerA: ${v}`));

    // let i = 0;
    // setInterval(() => subject.next(i++), 200);

    // setTimeout(() => {
    //   subject.subscribe((v) => console.log(`observerB: ${v}`));
    // }, 1000);


    //asyncSubject

    const subject = new AsyncSubject();

    subject.subscribe((v) => console.log(`observerA: ${v}`));

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe((v) => console.log(`observerB: ${v}`));

    subject.next(5);
    subject.complete();

    of(1, 2, 3).pipe(last()).subscribe((v) => console.log(`Last val with 'last' operator: ${v}`));
  }

}
