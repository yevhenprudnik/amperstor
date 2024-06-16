import { Session, User } from '../types.js';
import { Db } from '../db/types.js';

interface Deps {
  db: Db;
}

export interface Service {
  signIn(email: string, password: string): Promise<User>;
  signUp(email: string, username: string, password: string): Promise<User>;
  verify(token: string, access?: string): Promise<Session>;
}

export function init(deps: Deps): Service;
