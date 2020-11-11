import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateTheComponentTreeComponent } from './navigate-the-component-tree.component';

describe('NavigateTheComponentTreeComponent', () => {
  let component: NavigateTheComponentTreeComponent;
  let fixture: ComponentFixture<NavigateTheComponentTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateTheComponentTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateTheComponentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
