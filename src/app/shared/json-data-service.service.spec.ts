import { TestBed } from '@angular/core/testing';

import { JsonDataServiceService } from './json-data-service.service';

describe('JsonDataServiceService', () => {
  let service: JsonDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
