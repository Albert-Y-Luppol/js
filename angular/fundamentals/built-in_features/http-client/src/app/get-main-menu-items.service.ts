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
        text: 'Server Communication',
        routerLink: '/server-communication',
      },
      {
        text: 'Requesting data',
        routerLink: '/requesting-data',

      },
      {
        text: 'Handling errors',
        routerLink: '/handling-errors',

      },
      {
        text: 'Sending data',
        routerLink: '/sending-data',

      },
      {
        text: 'HTTP URL parameters',
        routerLink: '/params',

      },
      {
        text: 'Interceptors',
        routerLink: '/interceptors',

      },
      {
        text: 'Tracking progress',
        routerLink: '/progress',

      },
      {
        text: 'Optimizing interaction',
        routerLink: '/optimization',

      },
      {
        text: 'Security: XSRF protection',
        routerLink: '/security',

      },
      {
        text: 'Testing HTTP requests',
        routerLink: '/testing',

      }
    ];
    return items;
  }
}
