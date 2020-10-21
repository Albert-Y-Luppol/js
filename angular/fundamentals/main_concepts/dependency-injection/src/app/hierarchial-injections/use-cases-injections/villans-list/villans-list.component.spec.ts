import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillansListComponent } from './villans-list.component';

describe('VillansListComponent', () => {
  let component: VillansListComponent;
  let fixture: ComponentFixture<VillansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
