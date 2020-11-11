import { Injectable } from '@angular/core';

@Injectable()
export class VillainsService {

  public getVillains() {
    return [
      { id: 1, name: 'V', skills: ['1', '2', '3'] },
      { id: 2, name: 'S', skills: ['3', '2', '3'] },
      { id: 3, name: 'O', skills: ['5', '2', '3'] },
      { id: 4, name: 'K', skills: ['6', '2', '3'] }
    ]
  }
}
