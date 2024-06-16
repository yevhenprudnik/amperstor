import { Pool } from 'pg';
import { Category } from '../types.js';

interface Deps {
  pgPool: Pool;
}

export interface Db {
  getAll(): Promise<Category[]>;
}

export function init(deps: Deps): Db;
