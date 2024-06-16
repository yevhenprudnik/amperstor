import pg from 'pg';
import { config } from './config.js';
import { server, start } from './server/server.js';
import { init as dbInit } from './db/db.js';
import { init as serviceInit } from './service/service.js';
import { init as apiInit } from './api/api.js';

const pool = new pg.Pool(config.db);
const db = dbInit({ pgPool: pool });
const service = serviceInit({ db });
apiInit({ server, service });
start();
