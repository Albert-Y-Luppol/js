import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParamsComponent } from './show-params.component';

describe('ShowParamsComponent', () => {
  let component: ShowParamsComponent;
  let fixture: ComponentFixture<ShowParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
