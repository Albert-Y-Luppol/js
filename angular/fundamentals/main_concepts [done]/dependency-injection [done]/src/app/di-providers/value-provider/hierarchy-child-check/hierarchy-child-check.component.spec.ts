import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyChildCheckComponent } from './hierarchy-child-check.component';

describe('HierarchyChildCheckComponent', () => {
  let component: HierarchyChildCheckComponent;
  let fixture: ComponentFixture<HierarchyChildCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyChildCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyChildCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
