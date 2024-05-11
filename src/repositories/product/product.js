/** @type {import('./types').init} */

export const init = (db) => {
  const productRepo = db('product');

  return {
    ...productRepo,
    findByCategory: async (categoryId) => {
      const query = `
      SELECT p.*
      FROM product p
      JOIN product_category pc ON p.id = pc.product_id
      WHERE pc.category_id = $1;
      `;

      const params = [categoryId];
      const { rows } = await productRepo.query(query, params);

      return rows;
    },
  };
};
