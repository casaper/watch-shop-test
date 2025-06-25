import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductWithPrice } from '../../../models/product.type';

@Component({
  selector: 'app-specifications',
  imports: [],
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss', '../watch-common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecificationsComponent {
  specifications = input.required<ProductWithPrice['productSpecifications']>();
  mediaMap = input.required<Record<string, string>>();
}
