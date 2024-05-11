import { Session, Handler } from '../types.d.ts';
import { User, UserRole } from '../../entities/user.d.ts';
import { UserRepo } from '../../repositories/user/types.d.ts';

interface Deps {
  userRepo: UserRepo;
}

interface UserService extends Record<string, Handler> {
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
