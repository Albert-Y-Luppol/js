import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInteractionOnchangeComponent } from './child-interaction-onchange.component';

describe('ChildInteractionOnchangeComponent', () => {
  let component: ChildInteractionOnchangeComponent;
  let fixture: ComponentFixture<ChildInteractionOnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInteractionOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInteractionOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
