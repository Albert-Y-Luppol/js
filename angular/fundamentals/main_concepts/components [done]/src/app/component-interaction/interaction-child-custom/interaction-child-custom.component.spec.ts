import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionChildCustomComponent } from './interaction-child-custom.component';

describe('InteractionChildCustomComponent', () => {
  let component: InteractionChildCustomComponent;
  let fixture: ComponentFixture<InteractionChildCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionChildCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionChildCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
