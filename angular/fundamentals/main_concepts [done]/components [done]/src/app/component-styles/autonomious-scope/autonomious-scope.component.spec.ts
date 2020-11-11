import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomiousScopeComponent } from './autonomious-scope.component';

describe('AutonomiousScopeComponent', () => {
  let component: AutonomiousScopeComponent;
  let fixture: ComponentFixture<AutonomiousScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomiousScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomiousScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
