import { TestBed } from '@angular/core/testing';

import { RestApiInterceptorService } from './rest-api-interceptor.service';

describe('RestApiInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiInterceptorService = TestBed.get(RestApiInterceptorService);
    expect(service).toBeTruthy();
  });
});
