import { TestBed } from '@angular/core/testing';

import { BreweryserviceService } from './breweryservice.service';

describe('BreweryserviceService', () => {
  let service: BreweryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreweryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
