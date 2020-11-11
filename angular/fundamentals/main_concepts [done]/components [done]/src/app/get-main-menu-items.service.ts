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
        text: 'Data binding',
        routerLink: '/data-binding',
        'aria-label': 'Data binding',
      },
      {
        text: 'User input',
        routerLink: '/user-input',
        'aria-label': 'User input',
      },
      {
        text: 'Pipes',
        routerLink: '/pipes',
        'aria-label': 'Pipes',
      },
      {
        text: 'Component Lifecycle',
        routerLink: '/component-lifecycle',
        'aria-label': 'Component Lifecycle',
      },
      {
        text: 'Component Interaction',
        routerLink: '/component-interaction',
        'aria-label': 'Component Interaction',
      },
      {
        text: 'Component Styles',
        routerLink: '/component-styles',
        'aria-label': 'Component Styles',
      },
      {
        text: 'Dynamic Components',
        routerLink: '/dynamic-componens',
        'aria-label': 'Event binding',
      },
      {
        text: 'Angular Elements',
        routerLink: '/angular-elements',
        'aria-label': 'Angular Elements',
      },
    ];
    return items;
  }
}
