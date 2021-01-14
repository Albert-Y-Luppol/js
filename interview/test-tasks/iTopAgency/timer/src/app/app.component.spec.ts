import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TimeFormatterPipe} from "./time-formatter.pipe";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimeFormatterPipe
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
