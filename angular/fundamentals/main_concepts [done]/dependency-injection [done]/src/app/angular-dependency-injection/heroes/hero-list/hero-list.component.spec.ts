import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../services/hero.service';

describe('HeroListComponent', () => {
  const expctedHeroes = [
    { id: 11, isSecret: false, name: 'Dr Nice' },
    { id: 12, isSecret: false, name: 'Narco' },
    { id: 13, isSecret: false, name: 'Bombasto' },
    { id: 14, isSecret: false, name: 'Celeritas' },
    { id: 15, isSecret: false, name: 'Magneta' },
    { id: 16, isSecret: false, name: 'RubberMan' },
    { id: 17, isSecret: false, name: 'Dynama' },
    { id: 18, isSecret: true, name: 'Dr IQ' },
    { id: 19, isSecret: true, name: 'Magma' },
    { id: 20, isSecret: true, name: 'Tornado' }
  ];
  const mockService = <HeroService>{ getHeroes: () => expctedHeroes };

  it('should have heroes when HeroListComponent created', () => {
    const component = new HeroListComponent(mockService);
    expect(component.heroes.length).toEqual(expctedHeroes.length);
  })

});
