import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomiousScopeCheckerComponent } from './autonomious-scope-checker.component';

describe('AutonomiousScopeCheckerComponent', () => {
  let component: AutonomiousScopeCheckerComponent;
  let fixture: ComponentFixture<AutonomiousScopeCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomiousScopeCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomiousScopeCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
