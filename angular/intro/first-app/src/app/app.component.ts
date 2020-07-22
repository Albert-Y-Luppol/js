import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Intro Project';

  showMsg = true;
  colorName = 'green';

  readMe() {
    console.log('Button Clicked!');
  }
}
