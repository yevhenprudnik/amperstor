/** @type {import('./types.js').init} */
export const init = ({ orderRepo }) => ({
  getAll: {
    access: 'common',
    handle: async () => {
      return orderRepo.findMany({});
    },
  },

  getById: {
    access: 'common',
    handle: async (_, params) => {
      const { id } = params;
      return orderRepo.findOne({ id });
    },
  },

  getByUser: {
    access: 'common',
    handle: async (_, args) => {
      const { id } = args;

      return orderRepo.findMany({ user_id: id });
    },
  },

  getByProduct: {
    access: 'common',
    handle: async (_, args) => {
      const { id } = args;

      return orderRepo.findMany({ product_id: id });
    },
  },

  getByDate: {
    access: 'common',
    handle: async (_, args) => {
      const { d1, d2 } = args;

      return orderRepo.findBetweenDates(d1, d2);
    },
  },

  create: {
    access: 'admin',
    handle: async (_, params) => {
      const { user_id, product_id, order_date } = params;
      return orderRepo.create({
        user_id,
        product_id,
        order_date: new Date(order_date),
      });
    },
  },

  update: {
    access: 'admin',
    handle: async (_, params) => {
      const { id, user_id, product_id, order_date } = params;
      return orderRepo.update(id, {
        user_id,
        product_id,
        order_date: order_date ? new Date(order_date) : undefined,
      });
    },
  },
});
