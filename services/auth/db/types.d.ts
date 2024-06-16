import { Pool } from 'pg';
import { User } from '../types.js';

interface Deps {
  pgPool: Pool;
}

export interface Db {
  create(user: Partial<User>): Promise<User>;
  findById(id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export function init(deps: Deps): Db;
