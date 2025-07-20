import { TestBed } from '@angular/core/testing';

import { DrinkDetails } from './drink-details';

describe('DrinkDetails', () => {
  let service: DrinkDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
