import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionSetterParentComponent } from './interaction-setter-parent.component';

describe('InteractionSetterParentComponent', () => {
  let component: InteractionSetterParentComponent;
  let fixture: ComponentFixture<InteractionSetterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionSetterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSetterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
