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
        routerLink: '/intro',
        'aria-label': 'Introduction to Template Syntax',
      },
      {
        text: 'Interpolation',
        routerLink: '/interpolation',
        'aria-label': 'Introduction to Template Syntax',
      },
      {
        text: 'Template statements',
        routerLink: '/template-statements',
        'aria-label': 'Template statements',
      },
      {
        text: 'Binding syntax',
        routerLink: '/binding-syntax',
        'aria-label': 'Binding syntax',
      },
      {
        text: 'Property binding',
        routerLink: '/property-binding',
        'aria-label': 'Property binding',
      },
      {
        text: 'Attributes, class & style bindings',
        routerLink: '/attributes-class-style-bindings',
        'aria-label': 'Attributes, class & style bindings',
      },
      {
        text: 'Event binding',
        routerLink: '/event-binding',
        'aria-label': 'Event binding',
      },
      {
        text: 'Two-way binding',
        routerLink: '/two-way-binding',
        'aria-label': 'Two-way binding',
      },
      {
        text: 'Built-in directives',
        routerLink: '/built-in-directives',
        'aria-label': 'Built-in directives',
      },
      {
        text: 'Template reference variables',
        routerLink: '/template-reference-variables',
        'aria-label': 'Template reference variables',
      },
      {
        text: 'Inputs & Outputs',
        routerLink: '/inputs-outputs',
        'aria-label': 'Inputs & Outputs',
      },
      {
        text: 'Template expression operators',
        routerLink: '/template-expression-operators',
        'aria-label': 'Template expression operators',
      },
      {
        text: 'SVG in templates',
        routerLink: '/svg-in-templates',
        'aria-label': 'SVG in templates',
      },
    ];
    return items;
  }
}
