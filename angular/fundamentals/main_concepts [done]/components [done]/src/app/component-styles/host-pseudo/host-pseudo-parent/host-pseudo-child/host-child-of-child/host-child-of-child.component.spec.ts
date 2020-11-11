import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostChildOfChildComponent } from './host-child-of-child.component';

describe('HostChildOfChildComponent', () => {
  let component: HostChildOfChildComponent;
  let fixture: ComponentFixture<HostChildOfChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostChildOfChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostChildOfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
