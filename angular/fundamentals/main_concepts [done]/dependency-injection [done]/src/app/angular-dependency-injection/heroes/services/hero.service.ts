import { Injectable, Optional } from '@angular/core';
import { UserService } from 'src/app/di-providers/services/user.service';

import { HEROES } from '../mock-heroes';
import { Logger } from './logger.service';

@Injectable(
    // {
    // providedIn: 'root',
    // useFactory: (logger: Logger, userService: UserService) => new HeroService(logger, userService.user.isAutorized),
    // deps: [Logger, UserService]
    // }
)
export class HeroService {
    constructor(@Optional() private logger?: Logger) { } //if there is no logger - it returns null
    getHeroes() {
        if (this.logger) this.logger.log("Getting heroes...");
        return HEROES;
    }
}