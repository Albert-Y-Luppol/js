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
        'aria-label': 'Introduction',
      },
      {
        text: 'Reactive Forms',
        routerLink: '/reactive-forms',
        'aria-label': 'Reactive Forms',
      },
      {
        text: 'Validate form input',
        routerLink: '/validate-form-input',
        'aria-label': 'Validate form input',
      },
      {
        text: 'Building Dynamic Forms',
        routerLink: '/building-dynamics-forms',
        'aria-label': 'Building Dynamics Forms',
      },
    ];
    return items;
  }
}
