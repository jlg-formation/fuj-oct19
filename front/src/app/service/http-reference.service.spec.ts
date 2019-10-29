import { TestBed } from '@angular/core/testing';

import { HttpReferenceService } from './http-reference.service';

describe('HttpReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpReferenceService = TestBed.get(HttpReferenceService);
    expect(service).toBeTruthy();
  });
});
