import { Injectable } from '@angular/core';

@Injectable()
export class NewLogger {

  log(message: any) {
    console.log('New Logger: ', message);
  }
}
