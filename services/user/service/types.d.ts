import { User } from '../types.d.ts';
import { Db } from '../db/types.d.ts';

interface Deps {
  db: Db;
}

export interface Service {
  create(
    user: Omit<User, 'id' | 'role' | 'discount'> &
      Pick<Partial<User>, 'role' | 'discount'>,
  ): Promise<User>;
  update(
    id: number,
    user: Partial<Pick<User, 'email' | 'username' | 'role'>>,
  ): Promise<User>;
}

export function init(deps: Deps): Service;
