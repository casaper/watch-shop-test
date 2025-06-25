import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ProductWithPrice } from '../../models/product.type';

import { DetailsComponent } from './details/details.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { LeadComponent } from './lead/lead.component';

@Component({
  selector: 'app-watch',
  imports: [SpecificationsComponent, DetailsComponent, LeadComponent],
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss', './watch-common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchComponent {
  product = input.required<ProductWithPrice>();
  galleryMedia = computed<ProductWithPrice['medias']>(() =>
    this.product()
      .medias.filter((i) => i.targetAttr === 'gallery')
      .sort((a, b) => a.sortOrder - b.sortOrder)
  );
  mediaMap = computed<Record<string, string>>(() =>
    Object.fromEntries(this.product().medias.map((i) => [i.targetAttr, i.path]))
  );
}
