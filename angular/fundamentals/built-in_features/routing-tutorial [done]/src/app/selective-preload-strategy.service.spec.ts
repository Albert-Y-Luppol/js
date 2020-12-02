import { TestBed } from '@angular/core/testing';

import { SelectivePreloadStrategyService } from './selective-preload-strategy.service';

describe('SelectivePreloadStrategyService', () => {
  let service: SelectivePreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectivePreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
