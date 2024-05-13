import { apiError } from '../../lib/exceptions/apiError.js';
import { passwords } from '../../lib/passwords/passwords.js';
import { sessions } from '../../lib/sessions/sessions.js';

/** @type {import('./types.d.ts').init} */
export const init = ({ userRepo }) => ({
  getById: {
    access: 'common',
    handle: async (_, params) => {
      const { id } = params;

      return userRepo.findOne({ id });
    },
  },

  getAll: {
    access: 'common',
    handle: async (_) => {
      return userRepo.findMany({});
    },
  },

  getByUsername: {
    access: 'common',
    handle: async (_, args) => {
      const { username } = args;

      const query = 'SELECT * FROM "user" WHERE LOWER("username") LIKE $1;';
      const params = [`%${username.toLowerCase()}%`];
      const { rows } = await userRepo.query(query, params);

      return rows;
    },
  },

  getByDiscount: {
    access: 'common',
    handle: async (_, args) => {
      const { min, max } = args;

      const query = 'SELECT * FROM "user" WHERE "discount" BETWEEN $1 AND $2;';
      const params = [min, max];
      const { rows } = await userRepo.query(query, params);

      return rows;
    },
  },

  create: {
    access: 'admin',
    handle: async (_, params) => {
      const { email, username, password } = params;

      const exist = await userRepo.findOne({ email });
      if (exist)
        throw apiError.badRequest('User with such email already exist.');
      const hashed = passwords.hash(password);
      const user = await userRepo.create({
        email,
        username,
        password: hashed,
      });

      return sessions.generate(user);
    },
  },

  update: {
    access: 'admin',
    handle: async (_, params) => {
      const { id, role, discount } = params;

      const user = await userRepo.findOne({ id });
      if (!user) throw apiError.notFound('User not found.');
      const updated = await userRepo.update(id, { role, discount });

      return updated;
    },
  },
});
