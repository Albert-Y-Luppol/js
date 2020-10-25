import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentLoggerComponent } from './silent-logger.component';

describe('SilentLoggerComponent', () => {
  let component: SilentLoggerComponent;
  let fixture: ComponentFixture<SilentLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilentLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilentLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
