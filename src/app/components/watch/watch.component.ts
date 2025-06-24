import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { ProductWithPrice } from '../../models/product.type';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { ImagesComponent } from './images/images.component';

@Component({
  selector: 'app-watch',
  imports: [
    CommonModule,
    SpecificationsComponent,
    DetailsComponent,
    ImagesComponent,
  ],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchComponent {
  product = input.required<ProductWithPrice>()
  mediaMap: Record<string, string> = {};
  galleryMedia = signal<ProductWithPrice['medias']>([]);

  constructor() {
    effect(() => {
      const media = this.product().medias;
      const mediaFilenames = media.map(i => [i.targetAttr, i.path]);
      this.galleryMedia.set(
        media.filter(i => i.targetAttr === 'gallery').sort((a, b) => a.sortOrder - b.sortOrder)
      );
      Object.assign(this.mediaMap, Object.fromEntries(mediaFilenames));
    });
  }
}
