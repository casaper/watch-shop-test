import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPage } from './wedding.page';

describe('WeddingPage', () => {
  let component: WeddingPage;
  let fixture: ComponentFixture<WeddingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WeddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
