import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingAttributeDirectivesComponent } from './testing-attribute-directives.component';

describe('TestingAttributeDirectivesComponent', () => {
  let component: TestingAttributeDirectivesComponent;
  let fixture: ComponentFixture<TestingAttributeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingAttributeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
