import { Server } from 'node:http';
import { Service } from '../../services/types.d.ts';

interface Deps {
  services: Record<string, Service>;
}

export function init(deps: Deps): Server;
