import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingSyntaxComponent } from './binding-syntax.component';

describe('BindingSyntaxComponent', () => {
  let component: BindingSyntaxComponent;
  let fixture: ComponentFixture<BindingSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
