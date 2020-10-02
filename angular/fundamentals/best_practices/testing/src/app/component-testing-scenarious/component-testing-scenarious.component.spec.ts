import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTestingScenariousComponent } from './component-testing-scenarious.component';

describe('ComponentTestingScenariousComponent', () => {
  let component: ComponentTestingScenariousComponent;
  let fixture: ComponentFixture<ComponentTestingScenariousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTestingScenariousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTestingScenariousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
