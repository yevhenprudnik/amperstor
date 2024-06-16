import { Product } from '../types.js';
import { Db } from '../db/types.js';

interface Deps {
  db: Db;
}

export interface Service {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product[]>;
  getByCategory(categoryId: number): Promise<Product[]>;
}

export function init(deps: Deps): Service;
