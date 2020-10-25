import { Injectable } from '@angular/core';

import { Logger } from './logger.service';
import { UserService } from './user.service';

@Injectable()
export class UserLogger extends Logger {

  constructor(private userService: UserService) {
    super();
  }

  public log(message: string) {
    const name = this.userService.user.name;

    super.log(`Message to ${name}: ${message}`);
  }
}
