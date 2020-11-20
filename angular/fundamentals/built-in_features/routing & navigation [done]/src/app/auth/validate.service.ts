import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validate(pass: string): boolean{
    if(pass.toLowerCase() === 'please') return true;
    return false;
  }
}
