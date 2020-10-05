import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextChildComponent } from './host-context-child.component';

describe('HostContextChildComponent', () => {
  let component: HostContextChildComponent;
  let fixture: ComponentFixture<HostContextChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
