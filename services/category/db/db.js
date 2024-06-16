/** @type {import('./types.js').init} */
export const init = ({ pgPool }) => ({
  getAll: async () => {
    const query = 'SELECT * from "category";';
    const { rows } = await pgPool.query(query);

    return rows;
  },
});
