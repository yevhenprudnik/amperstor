import { Repository, db } from '../../infra/db/types.d.ts';
import { User } from '../../entities/user.d.ts';

export interface UserRepo extends Repository<User> {}

export function init(db: db): UserRepo;
