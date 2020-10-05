import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponensComponent } from './dynamic-componens.component';

describe('DynamicComponensComponent', () => {
  let component: DynamicComponensComponent;
  let fixture: ComponentFixture<DynamicComponensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
