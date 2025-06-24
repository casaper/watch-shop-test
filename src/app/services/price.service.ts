import { Injectable } from '@angular/core';
import { Price } from '../models/price.type';
import { priceData, priceById, priceBySku } from './price-data';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  getPrices(active = true): Observable<Price[]> {
    if (active) {
      return from(Promise.resolve(priceData.filter(price => price.isActive)));
    }
    return from(Promise.resolve(priceData));
  }

  getPriceBySku(sku: string): Observable<Price> {
    const price = priceBySku[sku];
    if (!price) {
      throw new Error(`404: Not found. Price with sku ${sku} does not exist.`);
    }
    return from(Promise.resolve(price));
  }

  getPriceById(id: string): Observable<Price> {
    const price = priceById[id];
    if (!price) {
      throw new Error(`404: Not found. Price with id ${id} does not exist.`);
    }
    return from(Promise.resolve(price));
  }
}
