import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingUtilityApisComponent } from './testing-utility-apis.component';

describe('TestingUtilityApisComponent', () => {
  let component: TestingUtilityApisComponent;
  let fixture: ComponentFixture<TestingUtilityApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingUtilityApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingUtilityApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
