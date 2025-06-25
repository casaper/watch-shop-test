import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductWithPrice } from '../../../models/product.type';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-lead',
  imports: [CommonModule, ImagesComponent],
  templateUrl: './lead.component.html',
  styleUrls: [
    './lead.component.scss',
    '../watch-common.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadComponent {
  product = input.required<ProductWithPrice>();
  galleryMedia = input.required<ProductWithPrice['medias']>();
}
