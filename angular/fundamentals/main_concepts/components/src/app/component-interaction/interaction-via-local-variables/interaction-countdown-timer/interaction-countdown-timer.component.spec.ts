import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionCountdownTimerComponent } from './interaction-countdown-timer.component';

describe('InteractionCountdownTimerComponent', () => {
  let component: InteractionCountdownTimerComponent;
  let fixture: ComponentFixture<InteractionCountdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionCountdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
