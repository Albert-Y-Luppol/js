import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithOnchangeComponent } from './input-with-onchange.component';

describe('InputWithOnchangeComponent', () => {
  let component: InputWithOnchangeComponent;
  let fixture: ComponentFixture<InputWithOnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
