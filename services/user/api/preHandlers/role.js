import { apiError } from '../../utils/exceptions.js';

/** @type {(role: 'common' | 'admin') => (request: any, reply: any) => Promise<any>} */
export const rolePreHandler = (role) => async (request, response) => {
  try {
    const { user } = request;
    if (user.role !== 'admin' && user.role !== role) {
      throw apiError.forbidden();
    }
  } catch (e) {
    console.log(e);
    throw apiError.forbidden();
  }
};
