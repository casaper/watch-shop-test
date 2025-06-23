import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesPage } from './watches.page';

describe('WatchesPage', () => {
  let component: WatchesPage;
  let fixture: ComponentFixture<WatchesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
