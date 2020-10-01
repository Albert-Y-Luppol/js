import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContentBrotherComponent } from './host-content-brother.component';

describe('HostContentBrotherComponent', () => {
  let component: HostContentBrotherComponent;
  let fixture: ComponentFixture<HostContentBrotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContentBrotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContentBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
