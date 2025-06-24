import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductWithPrice } from '../../../models/product.type';

@Component({
  selector: 'app-specifications',
  imports: [CommonModule],
  templateUrl: './specifications.component.html',
  styleUrl: './specifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecificationsComponent {
  specifications = input.required<ProductWithPrice['productSpecifications']>();
  mediaMap = input.required<Record<string, string>>();
}
