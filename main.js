/**
 * @typedef {import('./src/infra/db/types').Repository<any>} Repository
 * @typedef {import('./src/services/types').Service} Service
 */

import pg from 'pg';
import { config } from './config.js';
import dbInitializer from './src/infra/db/db.js';
import { loader } from './src/lib/loader/loader.js';
import serverInitializer from './src/lib/transport/http.js';

const db = dbInitializer.init(new pg.Pool(config.db));

/** @type {Record<string, Repository>} */
const repositories = await loader.loadDir('/src/repositories', db, 'Repo');

/** @type {Record<string, Service>} */
const services = await loader.loadDir('/src/services', repositories);

const server = serverInitializer.init({ services });

server.listen(config.server.port, () => {
  console.log('Server started on port 8080...');
});
