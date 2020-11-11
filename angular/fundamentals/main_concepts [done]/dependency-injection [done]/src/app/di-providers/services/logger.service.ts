import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs: string[] = []; // capture logs for testing

  public log(message: string) {
    console.log('Logger: ', message);
    this.logs.push(message);
  }
}
