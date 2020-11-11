import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasedClassComponent } from './aliased-class.component';

describe('AliasedClassComponent', () => {
  let component: AliasedClassComponent;
  let fixture: ComponentFixture<AliasedClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasedClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
