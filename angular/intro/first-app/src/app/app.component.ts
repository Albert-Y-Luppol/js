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
  colorValue = 'indigo';
  switchValue = 'three';
  clsName = 'doom';
  clsNameLast = 'peace';
  implementClasses = false;
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sue' },
    { id: 3, name: 'Gin' },
  ];

  readMe() {
    console.log('Button Clicked!');
  }
}
