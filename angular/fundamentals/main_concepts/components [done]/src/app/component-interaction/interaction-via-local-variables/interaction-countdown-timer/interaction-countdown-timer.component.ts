import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-interaction-countdown-timer',
  templateUrl: './interaction-countdown-timer.component.html',
  styleUrls: ['./interaction-countdown-timer.component.scss'],
})
export class InteractionCountdownTimerComponent implements OnInit, OnDestroy {
  public message = '';
  public seconds = 11;

  private intervalId = 0;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  public start() {
    this.countDown();
  }

  public stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
