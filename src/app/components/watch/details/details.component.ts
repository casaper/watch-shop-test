import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductWithPrice } from '../../../models/product.type';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../watch-common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  mediaMap = input.required<Record<string, string>>();
  details = input.required<ProductWithPrice['productDetails']>();
}
