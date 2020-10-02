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
        text: 'Intro to Testing',
        routerLink: '/intro',
      },
      {
        text: 'Code Coverage',
        routerLink: '/code-coverage',

      },
      {
        text: 'Testing Services',
        routerLink: '/testing-services',

      },
      {
        text: 'Basics of Testing Components',
        routerLink: '/basics-of-testing-components',

      },
      {
        text: 'Component Testing Scenarious',
        routerLink: '/component-testing-scenarious',

      },
      {
        text: 'Testing Attribute Directives',
        routerLink: '/testing-attribute-directives',

      },
      {
        text: 'Testing Pipes',
        routerLink: '/testing-pipes',

      },
      {
        text: 'Debugging Tests',
        routerLink: '/debugging-tests',

      },
      {
        text: 'Testing Utility APIs',
        routerLink: '/testing-utility-apis',

      },
    ];
    return items;
  }
}
