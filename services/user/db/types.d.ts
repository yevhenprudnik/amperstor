import { Pool } from 'pg';
import { User } from '../types.d.ts';

interface Deps {
  pgPool: Pool;
}

export interface Db {
  create(user: Partial<User>): Promise<User>;
  update(
    id: number,
    user: Partial<Pick<User, 'email' | 'username' | 'role'>>,
  ): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
}

export function init(deps: Deps): Db;
