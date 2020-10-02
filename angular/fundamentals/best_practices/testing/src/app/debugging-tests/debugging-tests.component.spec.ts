import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggingTestsComponent } from './debugging-tests.component';

describe('DebuggingTestsComponent', () => {
  let component: DebuggingTestsComponent;
  let fixture: ComponentFixture<DebuggingTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebuggingTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuggingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
