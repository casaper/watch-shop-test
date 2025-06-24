import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { ProductWithPrice } from '../../../models/product.type';

@Component({
  selector: 'app-images',
  imports: [CommonModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent implements OnInit {
  galleryMedia = input.required<ProductWithPrice['medias']>();
  selected = signal<ProductWithPrice['medias'][0] | null>(null);

  ngOnInit(): void {
    this.selected.set(this.galleryMedia()[0] || null);
  }

  selectImage(image: ProductWithPrice['medias'][0]): void {
    this.selected.set(image);
  }
}
