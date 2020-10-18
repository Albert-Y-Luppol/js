import { Component, OnInit } from '@angular/core';
import { interval, observable } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const observable = interval(1000);
    // const subscription = observable.subscribe(x => console.log(x));
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);


    const observable1 = interval(400);
    const observable2 = interval(700);
    const observable3 = interval(800);

    const subscription = observable1.subscribe(x => console.log('sub: ', x));
    const childSubscription = observable2.subscribe(x => console.log('child: ', x));
    const removedSubscription = observable3.subscribe(x => console.log('rem: ', x));


    subscription.add(childSubscription);
    subscription.add(removedSubscription);

    setTimeout(() => subscription.remove(removedSubscription), 1000);
    setTimeout(() => subscription.unsubscribe(), 2000);
    setTimeout(() => removedSubscription.unsubscribe(), 4000);
  }

}
