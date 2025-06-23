import jsonPrices from '../../assets/dummy-data/price.json';
import { Price } from '../models/price.type';

export const priceData: Price[] = jsonPrices as Price[];

export const priceById: Record<string, Price> = priceData.reduce((acc, price) => Object.assign(acc, { [price.id]: price }), {});
export const priceBySku: Record<string, Price> = priceData.reduce((acc, price) => Object.assign(acc, { [price.sku]: price }), {});
