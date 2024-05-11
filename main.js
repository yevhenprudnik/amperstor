/**
 * @typedef {import('./src/infra/db/types').Repository<any>} Repository
 * @typedef {import('./src/services/types').Service} Service
 */

import * as fsp from 'node:fs/promises';
import pg from 'pg';
import { config } from './config.js';
import dbInitializer from './src/infra/db/db.js';
import serverInitializer from './src/lib/transport/http.js';

const db = dbInitializer.init(new pg.Pool(config.db));
/** @type {Record<string, Repository>} */
const repositories = {};
const repoDirs = await fsp.readdir('./src/repositories');
for (const dir of repoDirs) {
  if (dir.endsWith('d.ts')) continue;
  const { init } = await import(`./src/repositories/${dir}/${dir}.js`);
  repositories[dir + 'Repo'] = init(db);
}

/** @type {Record<string, Service>} */
const services = {};
const servicesDirs = await fsp.readdir('./src/services');
for (const dir of servicesDirs) {
  if (dir.endsWith('d.ts')) continue;
  const { init } = await import(`./src/services/${dir}/${dir}.js`);
  services[dir] = init(repositories);
}

const server = serverInitializer.init({ services });

server.listen(config.server.port, () => {
  console.log('Server started on port 8080...');
});
