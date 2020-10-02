import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsOfTestingComponentsComponent } from './basics-of-testing-components.component';

describe('BasicsOfTestingComponentsComponent', () => {
  let component: BasicsOfTestingComponentsComponent;
  let fixture: ComponentFixture<BasicsOfTestingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsOfTestingComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsOfTestingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
