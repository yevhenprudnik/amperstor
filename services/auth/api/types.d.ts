import { Service } from '../service/types';
import { Server } from '../server/types';

interface Deps {
  server: Server;
  service: Service;
}

export function init(deps: Deps): void;
