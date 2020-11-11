import { TestBed } from '@angular/core/testing';

import { GetMainMenuItemsService } from './get-main-menu-items.service';

describe('GetMainMenuItemsService', () => {
  let service: GetMainMenuItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMainMenuItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
