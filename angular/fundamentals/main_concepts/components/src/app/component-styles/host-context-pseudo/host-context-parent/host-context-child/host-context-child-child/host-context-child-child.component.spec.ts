import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextChildChildComponent } from './host-context-child-child.component';

describe('HostContextChildChildComponent', () => {
  let component: HostContextChildChildComponent;
  let fixture: ComponentFixture<HostContextChildChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextChildChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
