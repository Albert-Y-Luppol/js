import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionSetterChildComponent } from './interaction-setter-child.component';

describe('InteractionSetterChildComponent', () => {
  let component: InteractionSetterChildComponent;
  let fixture: ComponentFixture<InteractionSetterChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionSetterChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSetterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
