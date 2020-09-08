import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInTemplatesComponent } from './svg-in-templates.component';

describe('SvgInTemplatesComponent', () => {
  let component: SvgInTemplatesComponent;
  let fixture: ComponentFixture<SvgInTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgInTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgInTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
