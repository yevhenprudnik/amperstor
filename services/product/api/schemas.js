export const getById = /** @type {const} */ ({
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' },
    },
    required: ['id'],
  },
});

export const getByCategoryId = /** @type {const} */ ({
  params: {
    type: 'object',
    properties: {
      categoryId: { type: 'number' },
    },
    required: ['categoryId'],
  },
});
