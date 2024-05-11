import {
  ApiError as IApiError,
  apiError,
} from '../../lib/exceptions/apiError.js';
import { passwords } from '../../lib/passwords/passwords.js';
import { sessions } from '../../lib/sessions/sessions.js';

/** @type {import('./types.d.ts').init} */
export const init = ({ userRepo }) => ({
  signIn: {
    access: 'none',
    handle: async (_, params) => {
      const { email, password } = params;

      const user = await userRepo.findOne({ email });
      if (!user) throw apiError.badRequest('Wrong credentials.');
      const validPassword = passwords.compare(password, user.password);
      if (!validPassword) throw apiError.badRequest('Wrong credentials.');

      return sessions.generate(user);
    },
  },

  verify: {
    access: 'none',
    private: true,
    handle: async (_, params) => {
      try {
        const { headers } = params;
        const token = headers.authorization;
        if (!token) throw apiError.unauthorized('No token provided.');
        const payload = sessions.validate(token);
        if (!payload?.id) throw apiError.unauthorized('Invalid token payload.');
        const user = await userRepo.findOne({ id: payload.id });
        if (!user) throw apiError.unauthorized('User not found.');

        return { user, token };
      } catch (err) {
        if (err instanceof IApiError) throw err;
        console.log('resolveSession error', err);
        throw apiError.unauthorized();
      }
    },
  },
});
