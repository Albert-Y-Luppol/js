import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarhialInjectionsComponent } from './hierarhial-injections.component';

describe('HierarhialInjectionsComponent', () => {
  let component: HierarhialInjectionsComponent;
  let fixture: ComponentFixture<HierarhialInjectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarhialInjectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarhialInjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
