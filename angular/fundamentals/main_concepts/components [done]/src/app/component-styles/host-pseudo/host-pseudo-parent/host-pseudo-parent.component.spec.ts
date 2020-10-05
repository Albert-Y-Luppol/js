import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPseudoParentComponent } from './host-pseudo-parent.component';

describe('HostPseudoParentComponent', () => {
  let component: HostPseudoParentComponent;
  let fixture: ComponentFixture<HostPseudoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPseudoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPseudoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
