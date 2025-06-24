import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-show-product',
  imports: [
    CommonModule,
  ],
  templateUrl: './watch.page.html',
  styleUrl: './watch.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchPage {
  private productsService = inject(ProductsService);
  private route = inject(ActivatedRoute);
  product$ = this.route.paramMap.pipe(
    map(params => params.get('sku')!),
    mergeMap(sku => this.productsService.getProductBySku(sku, true))
  );
  product = toSignal(this.product$);
}
