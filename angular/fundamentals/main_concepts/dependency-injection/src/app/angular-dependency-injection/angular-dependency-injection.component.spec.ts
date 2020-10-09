import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDependencyInjectionComponent } from './angular-dependency-injection.component';

describe('AngularDependencyInjectionComponent', () => {
  let component: AngularDependencyInjectionComponent;
  let fixture: ComponentFixture<AngularDependencyInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDependencyInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
