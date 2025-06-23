import { inject, Injectable } from '@angular/core';
import { Product, ProductWithPrice } from '../models/product.type';
import { productsData, productById, productBySku } from './products-data';
import { PriceService } from './price.service';
import { Observable, from, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  priceService = inject(PriceService);

  constructor() { }

  getProducts(active = true, includePrice = false): Observable<ProductWithPrice[]> {
    const products = (active ? productsData.filter(product => product.isActive) : productsData).map(p => this.sortProductMediaAndData(p));
    if (includePrice) {
      return from(Promise.all(products.map(product => this.addProductPrice(product))));
    }
    return from(Promise.resolve(products));
  }

  getProductById(id: string, includePrice = false): Observable<ProductWithPrice> {
    const product = productById[id];
    if (!product) {
      throw new Error(`404: Not found. Product with id ${id} does not exist.`);
    }
    if (includePrice) {
      return from(this.addProductPrice(this.sortProductMediaAndData(product)));
    }
    return from(Promise.resolve(this.sortProductMediaAndData(product)));
  }

  getProductBySku(sku: string, includePrice = false): Observable<ProductWithPrice> {
    const product = productBySku[sku];
    if (!product) {
      throw new Error(`404: Not found. Product with sku ${sku} does not exist.`);
    }
    if (includePrice) {
      return from(this.addProductPrice(this.sortProductMediaAndData(product)));
    }
    return from(Promise.resolve(this.sortProductMediaAndData(product)));
  }

  private async addProductPrice(product: Product): Promise<ProductWithPrice> {
    const price = await firstValueFrom(this.priceService.getPriceBySku(product.sku));
    return {
      ...product,
      price
    };
  }

  private sortProductMediaAndData(product: Product): ProductWithPrice {
    product.medias.sort((a, b) => a.sortOrder - b.sortOrder);
    product.productDetails.data.sort((a, b) => a.sortOrder - b.sortOrder);
    product.productSpecifications.data.sort((a, b) => a.sortOrder - b.sortOrder);
    return product;
  }
}
