import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProvidersComponent } from './class-providers.component';

describe('ClassProvidersComponent', () => {
  let component: ClassProvidersComponent;
  let fixture: ComponentFixture<ClassProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
