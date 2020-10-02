import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPipesComponent } from './testing-pipes.component';

describe('TestingPipesComponent', () => {
  let component: TestingPipesComponent;
  let fixture: ComponentFixture<TestingPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
