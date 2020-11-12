import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomChildComponent } from './tom-child.component';

describe('TomChildComponent', () => {
  let component: TomChildComponent;
  let fixture: ComponentFixture<TomChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
