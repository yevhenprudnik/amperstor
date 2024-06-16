export const signInSchema = /** @type {const} */ ({
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'password'],
  },
});

export const signUpSchema = /** @type {const} */ ({
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      username: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'username', 'password'],
  },
});

export const verifySchema = /** @type {const} */ ({
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      },
    },
    required: ['authorization'],
  },
});
