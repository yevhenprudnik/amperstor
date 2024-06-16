/** @type {import('./types.js').init} */
export const init = ({ db }) => ({
  getAll: async () => {
    return db.getAll();
  },

  getById: async (id) => {
    return db.getById(id);
  },

  getByCategory: async (categoryId) => {
    return db.getByCategory(categoryId);
  },
});
