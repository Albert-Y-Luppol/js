import {Component, forwardRef} from '@angular/core';

export abstract class Base{
  name: string;
}

export abstract class Parent{
  name: string;
}

//helper
export function parentProvider(component: any){
  return {provide: Parent, useExisting: forwardRef(()=>component)};
}

@Component({
  selector: 'alex',
  templateUrl: './alex.component.html',
  styleUrls: ['./alex.component.scss'],
  providers: [parentProvider(AlexComponent)]
})
export class AlexComponent implements Base{

  name = 'Alex';
}
