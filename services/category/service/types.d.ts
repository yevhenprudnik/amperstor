import { Category } from '../types.js';
import { Db } from '../db/types.js';

interface Deps {
  db: Db;
}

export interface Service {
  getAll(): Promise<Category[]>;
}

export function init(deps: Deps): Service;
