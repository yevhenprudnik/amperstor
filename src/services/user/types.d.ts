import { Session, Handler } from '../types.d.ts';
import { User, UserRole } from '../../entities/user.d.ts';
import { UserRepo } from '../../repositories/user/types.d.ts';

interface Deps {
  userRepo: UserRepo;
}

interface UserService extends Record<string, Handler> {
  getAll: Handler<{}, Promise<User[]>>;
  getById: Handler<{ id: number }, Promise<User>>;
  getByUsername: Handler<{ username: string }, Promise<User[]>>;
  getByDiscount: Handler<{ min: number; max: number }, Promise<User[]>>;
  create: Handler<
    {
      email: string;
      username: string;
      password: string;
      role: UserRole;
      discount?: number;
    },
    Promise<Session>
  >;
  update?: Handler<
    {
      id: number;
      role?: UserRole;
      discount?: number;
    },
    Promise<User>
  >;
}

export function init(deps: Deps): UserService;
