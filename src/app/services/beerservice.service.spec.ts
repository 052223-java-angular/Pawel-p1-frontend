import { TestBed } from '@angular/core/testing';

import { BeerService } from './beerservice.service';

describe('BeerserviceService', () => {
  let service: BeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
