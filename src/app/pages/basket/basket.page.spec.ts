import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPage } from './basket.page';

describe('BasketPage', () => {
  let component: BasketPage;
  let fixture: ComponentFixture<BasketPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
