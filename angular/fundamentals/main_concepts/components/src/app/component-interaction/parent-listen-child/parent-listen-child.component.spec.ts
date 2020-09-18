import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListenChildComponent } from './parent-listen-child.component';

describe('ParentListenChildComponent', () => {
  let component: ParentListenChildComponent;
  let fixture: ComponentFixture<ParentListenChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListenChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
