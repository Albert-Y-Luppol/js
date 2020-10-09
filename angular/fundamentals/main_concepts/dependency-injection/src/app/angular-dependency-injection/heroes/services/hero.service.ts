import { Injectable, Optional } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Logger } from './logger.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
    constructor(@Optional() private logger?: Logger) { } //if there is no logger - it returns null
    getHeroes() {
        if (this.logger) this.logger.log("Getting heroes...");
        return HEROES;
    }
}