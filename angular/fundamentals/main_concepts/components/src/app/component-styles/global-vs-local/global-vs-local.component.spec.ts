import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVsLocalComponent } from './global-vs-local.component';

describe('GlobalVsLocalComponent', () => {
  let component: GlobalVsLocalComponent;
  let fixture: ComponentFixture<GlobalVsLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalVsLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalVsLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
