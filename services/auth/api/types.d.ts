import { Service } from '../service/types.d.ts';
import { Server } from '../server/types.d.ts';

interface Deps {
  server: Server;
  service: Service;
}

export function init(deps: Deps): void;
