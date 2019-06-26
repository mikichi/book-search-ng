import { TestBed } from '@angular/core/testing';

import { HttpAbstractService } from './http-abstract.service';

describe('HttpAbstractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpAbstractService = TestBed.get(HttpAbstractService);
    expect(service).toBeTruthy();
  });
});
