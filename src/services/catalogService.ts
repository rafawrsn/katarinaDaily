import { products as productData, categories as categoryData, type Product } from '@/data/products';

export type { Product };

/**
 * Catalog service.
 *
 * This is the single source of truth the UI uses to read product data.
 * Today it reads from a local static file; when a backend is added,
 * only this module needs to change — swap the synchronous returns
 * for Supabase queries and keep the same function signatures so
 * every page and component continues to work unchanged.
 */

export async function getProducts(): Promise<Product[]> {
  return productData;
}

export async function getProductById(id: number | string): Promise<Product | undefined> {
  return productData.find((p) => p.id === Number(id));
}

export async function getCategories(): Promise<string[]> {
  return categoryData;
}
