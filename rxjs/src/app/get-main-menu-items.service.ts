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
        routerLink: '/overview',

      },
      {
        text: 'Observables',
        routerLink: '/observables',

      },
      {
        text: 'Observer',
        routerLink: '/observer',
      },
      {
        text: 'Operators',
        routerLink: '/operators',
      },
      {
        text: 'Subscription',
        routerLink: '/subscription',
      },
      {
        text: 'Subjects',
        routerLink: '/subjects',
      },
      {
        text: 'Scheduler',
        routerLink: '/scheduler',
      },
      {
        text: 'Testing',
        routerLink: '/testing',
      },
    ];
    return items;
  }
}
