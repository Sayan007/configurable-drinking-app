import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkList } from './drink-list';

describe('DrinkList', () => {
  let component: DrinkList;
  let fixture: ComponentFixture<DrinkList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
