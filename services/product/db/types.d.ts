import { Pool } from 'pg';
import { Product } from '../types.js';

interface Deps {
  pgPool: Pool;
}

export interface Db {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product[]>;
  getByCategory(categoryId: number): Promise<Product[]>;
}

export function init(deps: Deps): Db;
