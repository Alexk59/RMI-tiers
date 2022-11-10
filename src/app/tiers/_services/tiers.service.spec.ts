import { TestBed } from '@angular/core/testing';

import { TiersService } from './tiers.service';

describe('TiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiersService = TestBed.get(TiersService);
    expect(service).toBeTruthy();
  });
});
