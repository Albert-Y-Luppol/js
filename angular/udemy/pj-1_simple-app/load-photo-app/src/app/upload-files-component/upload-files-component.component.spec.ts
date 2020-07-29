import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesComponentComponent } from './upload-files-component.component';

describe('UploadFilesComponentComponent', () => {
  let component: UploadFilesComponentComponent;
  let fixture: ComponentFixture<UploadFilesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFilesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
