import { TestBed } from '@angular/core/testing';

import { AirtableCrudService } from './airtable-crud.service';

describe('AirtableCrudService', () => {
  let service: AirtableCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtableCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
