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
        text: 'Built-in directives',
        routerLink: '/built-in-directives',
        'aria-label': 'Built-in directives',
      },
      {
        text: 'Attribute Directives',
        routerLink: '/attribute-directives',
        'aria-label': 'Attribute Directives',
      },
      {
        text: 'Structural Directives',
        routerLink: '/structural-directives',
        'aria-label': 'Structural Directives',
      },
    ];
    return items;
  }
}
