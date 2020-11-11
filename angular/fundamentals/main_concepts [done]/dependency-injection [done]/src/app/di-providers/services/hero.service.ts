import { Injectable, Optional } from '@angular/core';

import { HEROES } from '../../angular-dependency-injection/heroes/mock-heroes';
import { Logger } from './logger.service';

@Injectable(
  // {
  //   providedIn: 'root',
  //   useFactory: (logger: Logger, userService: UserService) => new HeroinoService(logger, userService.user.isAutorized),
  //   deps: [Logger, UserService]
  // }
)
export class HeroinoService {
  constructor(@Optional() private logger?: Logger, @Optional() private isAutorized?: boolean) { }
  getHeroes() {
    if (this.isAutorized) {
      if (this.logger) this.logger.log("Getting heroes...");
      return HEROES;
    } else {
      if (this.logger) this.logger.log("You are not autorized!");
      return [];
    }
  }
}