import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinoListComponent } from './heroino-list.component';

describe('HeroinoListComponent', () => {
  let component: HeroinoListComponent;
  let fixture: ComponentFixture<HeroinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
