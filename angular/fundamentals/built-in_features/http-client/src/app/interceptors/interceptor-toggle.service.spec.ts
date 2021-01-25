import { TestBed } from '@angular/core/testing';

import { InterceptorToggleService } from './interceptor-toggle.service';

describe('InterceptorToggleService', () => {
  let service: InterceptorToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
