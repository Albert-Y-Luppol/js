import { Injectable } from '@angular/core';
import { MainMenuItem } from '../interfaces/mainMenuItem.intrface';
@Injectable({
  providedIn: 'root',
})
export class GetMainMenuItemsService {
  getItems(): MainMenuItem[] {
    let items: MainMenuItem[];
    items = [
      {
        text: 'Introduction',
        routerLink: '/introduction',

      },
      {
        text: 'Nesting routing',
        routerLink: '/nested',

      },
      {
        text: 'Query params',
        routerLink: '/query-params',

      }
    ];
    return items;
  }
}
