import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.page.html',
  styleUrl: './wish-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListPage {}
