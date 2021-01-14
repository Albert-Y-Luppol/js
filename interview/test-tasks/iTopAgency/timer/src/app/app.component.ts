import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {Timer} from "./timer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentTimer: Timer = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  lastTimerResult: Timer = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  reachMaxValue = false;
  subscription: Subscription = null;
  private svg: any;
  private tick = interval(1000);
  private doubleClickFlag = false;

  ngOnInit() {
     this.svg = document.getElementById('bg');
     this.svg.pauseAnimations();
  }

  triggerStartStop(){
    if(this.subscription) return this.stop();
    this.start();
  }

  triggerDoubleClick(){
    if(!this.doubleClickFlag) {
      this.doubleClickFlag = true;
      setTimeout(()=>{
        this.doubleClickFlag = false;
      }, 300);
      return;
    }

    this.doubleClickFlag = false;
    this.pause();
  }

  reset(){
    if(this.subscription) this.pause();
    this.clearTimer();
    this.start();
  }

  private start(){
    this.subscription = this.tick.subscribe(this.addOneTick.bind(this));
    this.svg.unpauseAnimations();
  }

  private stop(){
    this.pause();
    this.clearTimer();
  }

  private pause(){
    this.subscription.unsubscribe();
    this.subscription = null;
    this.svg.pauseAnimations();
  }

  private clearTimer(){
    this.lastTimerResult = Object.assign({}, this.currentTimer);
    this.currentTimer.hours = 0;
    this.currentTimer.seconds = 0;
    this.currentTimer.minutes = 0;
    this.reachMaxValue = false;
  }

  private addOneTick(){
    this.currentTimer.seconds++;
    if(this.currentTimer.seconds == 60) {
      this.currentTimer.minutes++;
      this.currentTimer.seconds = 0;
    }
    if(this.currentTimer.minutes == 60) {
      this.currentTimer.hours++;
      this.currentTimer.minutes = 0;
    }
    if(this.currentTimer.hours == 99 && this.currentTimer.minutes == 59 && this.currentTimer.seconds == 59){
      this.stop();
      this.reachMaxValue = true;
    }
  }

}
