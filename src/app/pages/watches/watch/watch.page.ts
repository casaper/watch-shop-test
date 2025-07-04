import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { ProductsService } from '../../../services/products.service';
import { WatchComponent } from '../../../components/watch/watch.component';

@Component({
  selector: 'app-watch-page',
  imports: [WatchComponent],
  templateUrl: './watch.page.html',
  styleUrl: './watch.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchPage {
  private productsService = inject(ProductsService);
  private route = inject(ActivatedRoute);
  product$ = this.route.paramMap.pipe(
    map((params) => params.get('sku')!),
    mergeMap((sku) => this.productsService.getProductBySku(sku, true))
  );
  product = toSignal(this.product$);
}
