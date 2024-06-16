import { signInSchema, signUpSchema, verifySchema } from './schemas.js';

/** @type {import('./types.js').init} */
export const init = ({ server, service }) => {
  server.post('/signIn', { schema: signInSchema }, (request, response) => {
    const { email, password } = request.body;
    return service.signIn(email, password);
  });

  server.post('/signUp', { schema: signUpSchema }, (request, response) => {
    const { email, username, password } = request.body;
    return service.signUp(email, username, password);
  });

  server.get('/verify', { schema: verifySchema }, (request, response) => {
    const token = request.headers.authorization;
    return service.verify(token);
  });
};
