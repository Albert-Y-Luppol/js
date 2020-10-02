import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCoverageComponent } from './code-coverage.component';

describe('CodeCoverageComponent', () => {
  let component: CodeCoverageComponent;
  let fixture: ComponentFixture<CodeCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
