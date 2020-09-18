import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { InteractionCountdownTimerComponent } from '../interaction-via-local-variables/interaction-countdown-timer/interaction-countdown-timer.component';

@Component({
  selector: 'app-interaction-view-child',
  templateUrl: './interaction-view-child.component.html',
  styleUrls: ['./interaction-view-child.component.scss'],
})
export class InteractionViewChildComponent implements AfterViewInit {
  @ViewChild(InteractionCountdownTimerComponent)
  private timerComonent: InteractionCountdownTimerComponent;

  ngAfterViewInit() {
    setTimeout(() => {
      this.seconds = () => {
        return this.timerComonent.seconds;
      };
    }, 0);
  }

  public seconds() {
    return 0;
  }

  public start() {
    this.timerComonent.start();
  }

  public stop() {
    this.timerComonent.stop();
  }
}
