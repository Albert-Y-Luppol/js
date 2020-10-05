import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPseudoChildComponent } from './host-pseudo-child.component';

describe('HostPseudoChildComponent', () => {
  let component: HostPseudoChildComponent;
  let fixture: ComponentFixture<HostPseudoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPseudoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPseudoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
