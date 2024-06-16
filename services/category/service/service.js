/** @type {import('./types.js').init} */
export const init = ({ db }) => ({
  getAll: async () => {
    return db.getAll();
  },
});
