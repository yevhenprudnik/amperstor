import { ApiError, apiError } from '../../utils/exceptions.js';

/** @type {(request: any, reply: any) => Promise<any>} */
export const authPreHandler = async (request, response) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) throw apiError.unauthorized('No token provided');
    const res = await fetch('http://auth-service:8000/verify', {
      headers: { authorization },
    });

    const { user, message } = await res.json();
    if (!user) throw apiError.unauthorized(message);

    request.user = user;
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) throw e;
    throw apiError.unauthorized();
  }
};
