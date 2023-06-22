import { TestBed } from '@angular/core/testing';

import { BeerserviceService } from './beerservice.service';

describe('BeerserviceService', () => {
  let service: BeerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
