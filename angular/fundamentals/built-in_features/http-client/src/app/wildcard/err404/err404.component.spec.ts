import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Err404 } from './err404.component';

describe('Err404', () => {
  let component: Err404;
  let fixture: ComponentFixture<Err404>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Err404 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Err404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
