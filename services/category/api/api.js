import { authPreHandler } from './preHandlers/auth.js';

/** @type {import('./types.js').init} */
export const init = ({ server, service }) => {
  server.get(
    '/',
    {
      preHandler: authPreHandler,
    },
    async (request, response) => {
      return service.getAll();
    },
  );
};
