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
        text: 'Angular Dependency Injection',
        routerLink: '/angular-dependency-injection',

      },
      {
        text: 'Hierarchial Injections',
        routerLink: '/hierarchial-injections',

      },
      {
        text: 'DI Providers',
        routerLink: '/di-providers',
      },
      {
        text: 'DI in Action',
        routerLink: '/di-in-action',
      },
      {
        text: 'Navigate the Component Tree',
        routerLink: '/navigate-the-component-tree',
      },
    ];
    return items;
  }
}
