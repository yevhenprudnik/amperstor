import { Repository, db } from '../../infra/db/types.d.ts';
import { Product } from '../../entities/product.d.ts';

interface ProductRepo extends Repository<Product> {
  findByCategory(categoryId: number): Promise<Product[]>;
}

export function init(db: db): ProductRepo;
