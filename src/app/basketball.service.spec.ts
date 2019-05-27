import { TestBed } from '@angular/core/testing';

import { BasketballService } from './basketball.service';

describe('BasketballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasketballService = TestBed.get(BasketballService);
    expect(service).toBeTruthy();
  });
});
