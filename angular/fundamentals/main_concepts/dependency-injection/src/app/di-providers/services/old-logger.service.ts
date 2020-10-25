import { Injectable } from '@angular/core';

@Injectable()
export class OldLogger {

  log(message: any) {
    console.log('New Logger: ', message);
  }
}
