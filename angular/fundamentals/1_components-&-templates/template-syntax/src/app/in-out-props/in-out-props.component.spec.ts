import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutPropsComponent } from './in-out-props.component';

describe('InOutPropsComponent', () => {
  let component: InOutPropsComponent;
  let fixture: ComponentFixture<InOutPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
