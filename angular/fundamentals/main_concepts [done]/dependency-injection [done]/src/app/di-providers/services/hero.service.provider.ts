import { HeroinoService } from './hero.service';
import { Logger } from './logger.service';
import { UserService } from './user.service';

const heroServiceFactory = (logger: Logger, userService: UserService) => {
    return new HeroinoService(logger, userService.user.isAutorized);
}

export let heroServiceProvider = {
    provide: HeroinoService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
}