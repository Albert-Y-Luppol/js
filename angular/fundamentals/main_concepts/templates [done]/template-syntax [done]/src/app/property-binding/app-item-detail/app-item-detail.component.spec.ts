import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemDetailComponent } from './app-item-detail.component';

describe('AppItemDetailComponent', () => {
  let component: AppItemDetailComponent;
  let fixture: ComponentFixture<AppItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
