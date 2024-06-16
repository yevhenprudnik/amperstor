import { getById, getByCategoryId } from './schemas.js';
import { authPreHandler } from './preHandlers/auth.js';

/** @type {import('./types.js').init} */
export const init = ({ server, service }) => {
  server.get('/', { preHandler: authPreHandler }, async (request, response) => {
    return service.getAll();
  });

  server.get(
    '/category/:categoryId',
    { schema: getByCategoryId, preHandler: authPreHandler },
    async (request, response) => {
      const { categoryId } = request.params;

      return service.getByCategory(categoryId);
    },
  );

  server.get(
    '/:id',
    { schema: getById, preHandler: authPreHandler },
    async (request, response) => {
      const { id } = request.params;

      return service.getById(id);
    },
  );
};
