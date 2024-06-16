import { apiError, ApiError as IApiError } from './utils/exceptions.js';
import { passwords } from './utils/passwords.js';
import { sessions } from './utils/sessions.js';

/** @type {import('./types.js').init} */
export const init = ({ db }) => ({
  signIn: async (email, password) => {
    const user = await db.findByEmail(email);
    if (!user) throw apiError.badRequest('Wrong credentials.');
    const validPassword = passwords.compare(password, user.password);
    if (!validPassword) throw apiError.badRequest('Wrong credentials.');

    return sessions.generate(user);
  },

  signUp: async (email, username, password) => {
    const exist = await db.findByEmail(email);
    if (exist) throw apiError.badRequest('User with such email already exist.');
    const hashed = passwords.hash(password);
    const user = await db.create({
      email,
      username,
      password: hashed,
    });

    return sessions.generate(user);
  },

  verify: async (token, access = 'common') => {
    try {
      if (access === 'none') return { user: {}, token: '' };
      if (!token) throw apiError.unauthorized('No token provided.');
      const payload = sessions.validate(token);
      if (!payload?.id) throw apiError.unauthorized('Invalid token payload.');
      const user = await db.findById(payload.id);
      if (!user) throw apiError.unauthorized('User not found.');
      if (user.role !== 'admin' && user.role !== access)
        throw apiError.forbidden();

      return { user, token };
    } catch (err) {
      if (err instanceof IApiError) throw err;
      console.log('Resolve Session error', err);
      throw apiError.unauthorized();
    }
  },
});
