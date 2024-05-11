import { IncomingMessage } from 'node:http';

export interface BodyParser {
  parse(req: IncomingMessage): Promise<any> ;
}