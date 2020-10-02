import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenValidatorComponent } from './template-driven-validator.component';

describe('TemplateDrivenValidatorComponent', () => {
  let component: TemplateDrivenValidatorComponent;
  let fixture: ComponentFixture<TemplateDrivenValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
