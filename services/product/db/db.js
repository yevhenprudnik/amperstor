/** @type {import('./types.js').init} */
export const init = ({ pgPool }) => ({
  getAll: async () => {
    const query = 'SELECT * from "product";';
    const { rows } = await pgPool.query(query);

    return rows;
  },

  getById: async (id) => {
    const query = 'SELECT * FROM "product" WHERE "id" = $1;';
    const params = [id];
    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },

  getByCategory: async (categoryId) => {
    const query = `
    SELECT p.*
    FROM product p
    JOIN product_category pc ON p.id = pc.product_id
    WHERE pc.category_id = $1;
    `;

    const params = [categoryId];
    const { rows } = await pgPool.query(query, params);

    return rows;
  },
});
