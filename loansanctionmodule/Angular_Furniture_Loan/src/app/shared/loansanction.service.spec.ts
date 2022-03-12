import { TestBed } from '@angular/core/testing';

import { LoansanctionService } from './loansanction.service';

describe('LoansanctionService', () => {
  let service: LoansanctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansanctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
