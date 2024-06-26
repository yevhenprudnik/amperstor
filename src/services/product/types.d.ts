import { Handler } from '../types.d.ts';
import { Product } from '../../entities/product.d.ts';
import { CategoryRepo } from '../../repositories/category/types.d.ts';
import { ProductRepo } from '../../repositories/product/types.d.ts';

interface Deps {
  productRepo: ProductRepo;
  categoryRepo: CategoryRepo;
}

interface ProductService extends Record<string, Handler> {
  getAll: Handler<{}, Promise<Product[]>>;
  getById: Handler<{ id: number }, Promise<Product>>;
  getByCategory: Handler<{ id: number }, Promise<Product[]>>;
}

export function init(deps: Deps): ProductService;
