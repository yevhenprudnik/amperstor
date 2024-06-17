import { apiError } from '../utils/exceptions.js';
import { passwords } from './utils/passwords.js';

/** @type {import('./types.js').init} */
export const init = ({ db }) => ({
  create: async (user) => {
    const emailExist = await db.findByEmail(user.email);
    if (emailExist)
      throw apiError.badRequest('User with such email already exist.');

    const usernameExist = await db.findByUsername(user.username);
    if (usernameExist)
      throw apiError.badRequest('User with such email already exist.');

    const password = passwords.hash(user.password);

    return db.create({ ...user, password });
  },

  update: async (id, { email, username, role }) => {
    if (email) {
      const emailExist = await db.findByEmail(email);
      if (emailExist)
        throw apiError.badRequest('User with such email already exist.');
    }

    if (username) {
      const usernameExist = await db.findByUsername(username);
      if (usernameExist)
        throw apiError.badRequest('User with such email already exist.');
    }

    return db.update(id, { email, username, role });
  },
});
