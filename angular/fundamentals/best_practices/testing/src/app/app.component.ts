import { Component } from '@angular/core';
import { GetMainMenuItemsService } from '../services/get-main-menu-items.service';
import { MainMenuItem } from '../interfaces/mainMenuItem.intrface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Testing';
  mainMenuItems: MainMenuItem[];

  constructor(private getMenuItems: GetMainMenuItemsService) { }
  ngOnInit() {
    this.mainMenuItems = this.getMenuItems.getItems();
  }
}
