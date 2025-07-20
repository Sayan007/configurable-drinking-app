import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkDetails } from './drink-details';

describe('DrinkDetails', () => {
  let component: DrinkDetails;
  let fixture: ComponentFixture<DrinkDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
