import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadMainComponent } from './lazy-load-main.component';

describe('LazyLoadMainComponent', () => {
  let component: LazyLoadMainComponent;
  let fixture: ComponentFixture<LazyLoadMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
