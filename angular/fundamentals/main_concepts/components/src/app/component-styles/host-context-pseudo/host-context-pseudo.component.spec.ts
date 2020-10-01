import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextPseudoComponent } from './host-context-pseudo.component';

describe('HostContextPseudoComponent', () => {
  let component: HostContextPseudoComponent;
  let fixture: ComponentFixture<HostContextPseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextPseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
