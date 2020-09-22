import { Component } from '@angular/core';
import { GetMainMenuItemsService } from './get-main-menu-items.service';
import { MainMenuItem } from 'src/interfaces/mainMenuItem.intrface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Forms';
  mainMenuItems: MainMenuItem[];

  constructor(public getMenuItems: GetMainMenuItemsService) {}
  ngOnInit() {
    this.mainMenuItems = this.getMenuItems.getItems();
  }
}
