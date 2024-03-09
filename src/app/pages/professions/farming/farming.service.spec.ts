import { TestBed } from '@angular/core/testing';

import { FarmingService } from './farming.service';

describe('FarmingService', () => {
  let service: FarmingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
