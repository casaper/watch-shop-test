import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryPage } from './jewellery.page';

describe('JewelleryPage', () => {
  let component: JewelleryPage;
  let fixture: ComponentFixture<JewelleryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelleryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(JewelleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
