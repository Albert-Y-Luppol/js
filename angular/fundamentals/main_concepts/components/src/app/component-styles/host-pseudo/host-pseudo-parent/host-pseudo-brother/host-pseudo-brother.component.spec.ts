import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPseudoBrotherComponent } from './host-pseudo-brother.component';

describe('HostPseudoBrotherComponent', () => {
  let component: HostPseudoBrotherComponent;
  let fixture: ComponentFixture<HostPseudoBrotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPseudoBrotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPseudoBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
