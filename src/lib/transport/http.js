/** @typedef {import('../../services/types').Session} DefaultSession */

import { createServer } from 'node:http';
import { ApiError as IApiError, apiError } from '../exceptions/apiError.js';
import { bodyParser } from '../bodyParser/bodyParser.js';

export const DEFAULT_HEADERS = {
  'X-XSS-Protection': '1; mode=block',
  'X-Content-Type-Options': 'nosniff',
  'Strict-Transport-Security': 'max-age=31536000; includeSubdomains; preload',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=UTF-8',
};

/** @type {import('./types').init} */
const init = ({ services }) =>
  createServer(async (req, res) => {
    try {
      const { url, headers, method } = req;
      if (!url) throw apiError.notFound();

      const [domain, action, id] = url.substring(1).split('/');
      const handler = services[domain]?.[action];

      if (!handler || handler.private) throw apiError.notFound();
      const { handle, access } = handler;
      const args = {};
      if (id) args.id = id;

      const session = await services.auth.verify.handle(null, {
        access,
        headers,
      });

      if (method === 'OPTIONS') {
        res.writeHead(204, DEFAULT_HEADERS);
        return res.end();
      }

      if (method !== 'GET') Object.assign(args, await bodyParser.parse(req));
      const result = await handle(session, args);
      res.writeHead(200, DEFAULT_HEADERS);
      res.end(JSON.stringify(result));
    } catch (err) {
      console.log(err);
      if (err instanceof IApiError) {
        res.writeHead(err.statusCode || 500, DEFAULT_HEADERS);
        return res.end(err.message || 'Internal Server Error');
      }
      res.writeHead(500, DEFAULT_HEADERS);
      return res.end('Internal Server Error');
    }
  });

export default { init };
