import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexChildComponent } from './alex-child.component';

describe('AlexChildComponent', () => {
  let component: AlexChildComponent;
  let fixture: ComponentFixture<AlexChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
