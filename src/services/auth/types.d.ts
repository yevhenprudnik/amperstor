import { IncomingHttpHeaders } from 'node:http';
import { Session, Handler } from '../types.d.ts';
import { UserRepo } from '../../repositories/user/types.d.ts';

interface Deps {
  userRepo: UserRepo;
}

interface AuthService extends Record<string, Handler> {
  signIn: Handler<{ email: string; password: string }, Promise<Session>>;
  signUp: Handler<
    { email: string; username: string; password: string },
    Promise<Session>
  >;
  verify: Handler<
    { headers: IncomingHttpHeaders; access: 'none' | 'common' | 'admin' },
    Promise<Session>
  >;
}

export function init(deps: Deps): AuthService;
