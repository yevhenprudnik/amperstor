import { Session, User } from '../types.js';
import { Db } from '../db/types.js';

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
    user: Partial<Pick<User, 'email' | 'username'>>,
  ): Promise<User>;
}

export function init(deps: Deps): Service;
