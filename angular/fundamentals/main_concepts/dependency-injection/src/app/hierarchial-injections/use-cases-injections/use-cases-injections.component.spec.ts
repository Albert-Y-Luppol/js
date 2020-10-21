import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCasesInjectionsComponent } from './use-cases-injections.component';

describe('UseCasesInjectionsComponent', () => {
  let component: UseCasesInjectionsComponent;
  let fixture: ComponentFixture<UseCasesInjectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCasesInjectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCasesInjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
