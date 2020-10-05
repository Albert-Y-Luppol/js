import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPseudoComponent } from './host-pseudo.component';

describe('HostPseudoComponent', () => {
  let component: HostPseudoComponent;
  let fixture: ComponentFixture<HostPseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
