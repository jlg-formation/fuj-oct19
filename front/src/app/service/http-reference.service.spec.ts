import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpReferenceService } from './http-reference.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule]
  }));

  it('should be created', () => {
    const service: HttpReferenceService = TestBed.get(HttpReferenceService);
    expect(service).toBeTruthy();
  });
});
