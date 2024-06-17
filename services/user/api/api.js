import { apiError } from '../utils/exceptions.js';
import { authPreHandler } from './preHandlers/auth.js';
import { rolePreHandler } from './preHandlers/role.js';
import { createSchema, updateSchema } from './schemas.js';

/** @type {import('./types.js').init} */
export const init = ({ server, service }) => {
  server.post(
    '/create',
    {
      schema: createSchema,
      preHandler: [authPreHandler, rolePreHandler('admin')],
    },
    async (request, response) => {
      const { email, username, password, role, discount } = request.body;

      return service.create({
        email,
        username,
        password,
        role,
        discount,
      });
    },
  );

  server.patch(
    '/update',
    { schema: updateSchema, preHandler: authPreHandler },
    async (request, response) => {
      if (!request.user) throw apiError.unauthorized();
      const { id } = request.user;
      const { email, username, role } = request.body;

      return service.update(id, { email, username, role });
    },
  );
};
