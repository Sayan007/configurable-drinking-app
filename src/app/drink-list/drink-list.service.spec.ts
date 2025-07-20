import { TestBed } from '@angular/core/testing';

import { DrinkListService } from './drink-list.service';

describe('DrinkList', () => {
  let service: DrinkListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
