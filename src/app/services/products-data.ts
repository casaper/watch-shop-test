import jsonProducts from '../../assets/dummy-data/products.json';
import { Product } from '../models/product.type';

export const productsData: Product[] = jsonProducts as Product[];

export const productById: Record<string, Product> = productsData.reduce((acc, product) => Object.assign(acc, { [product.id]: product }), {});
export const productBySku: Record<string, Product> = productsData.reduce((acc, product) => Object.assign(acc, { [product.sku]: product }), {});
