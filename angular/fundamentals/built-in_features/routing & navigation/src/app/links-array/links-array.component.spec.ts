import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksArrayComponent } from './links-array.component';

describe('LinksArrayComponent', () => {
  let component: LinksArrayComponent;
  let fixture: ComponentFixture<LinksArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
