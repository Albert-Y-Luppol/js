import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorToggleService {

  noopInterceptor = true;
  authInterceptor = true;

  constructor() { }
}
