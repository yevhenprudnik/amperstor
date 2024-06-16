import { fastify } from 'fastify';
import { config } from '../config.js';

/** @type {import('./types.js').Server} */
export const server = fastify();

export const start = () =>
  server.listen({ port: config.server.port, host: '0.0.0.0' }, () => {
    console.log(`Listening on ${config.server.port}...`);
  });
