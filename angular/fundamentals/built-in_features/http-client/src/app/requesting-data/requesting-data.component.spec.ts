import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestingDataComponent } from './requesting-data.component';

describe('RequestingDataComponent', () => {
  let component: RequestingDataComponent;
  let fixture: ComponentFixture<RequestingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
