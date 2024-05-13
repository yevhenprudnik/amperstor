import { User } from '../../entities/user.d.ts';
import { Session } from '../../services/types.d.ts';

export interface Sessions {
  generate(payload: User): Session;
  validate(token: string): any;
}
