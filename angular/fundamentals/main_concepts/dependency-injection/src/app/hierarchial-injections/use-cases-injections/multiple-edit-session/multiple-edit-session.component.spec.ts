import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleEditSessionComponent } from './multiple-edit-session.component';

describe('MultipleEditSessionComponent', () => {
  let component: MultipleEditSessionComponent;
  let fixture: ComponentFixture<MultipleEditSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleEditSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleEditSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
