import { User } from '../entities/user.d.ts';

export interface Session {
  user: Partial<User>;
  token: string;
}

interface BaseHandler<Params, Result> {
  (session: Session, params: Params): Result;
}

export interface Handler<Params, Result> {
  access: 'none' | 'common' | 'admin';
  handle: BaseHandler<Params, Result>;
  private?: boolean;
}

export type Service = Record<string, Handler>;
