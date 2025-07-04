import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchPage } from './watch.page';

describe('ShowProductComponent', () => {
  let component: WatchPage;
  let fixture: ComponentFixture<WatchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
