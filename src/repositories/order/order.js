/** @type {import('./types').init} */
export const init = (db) => {
  const orderRepo = db('order');

  return {
    ...orderRepo,
    findBetweenDates: async (d1, d2) => {
      const query = `
        SELECT *
        FROM "order"
        WHERE "order_date" BETWEEN $1 AND $2
      `;

      const params = [new Date(d1), new Date(d2)];
      const { rows } = await orderRepo.query(query, params);

      return rows;
    },
  };
};
