import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextSiblingComponent } from './host-context-sibling.component';

describe('HostContextSiblingComponent', () => {
  let component: HostContextSiblingComponent;
  let fixture: ComponentFixture<HostContextSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
