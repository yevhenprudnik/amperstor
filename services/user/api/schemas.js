export const createSchema = /** @type {const} */ ({
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      username: { type: 'string' },
      password: { type: 'string' },
      role: { type: 'string', enum: ['admin', 'common'] },
      discount: { type: 'integer' },
    },
    required: ['email', 'username', 'password'],
  },
});

export const updateSchema = /** @type {const} */ ({
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      username: { type: 'string' },
    },
  },
});
