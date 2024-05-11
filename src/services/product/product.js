/** @type {import('./types.d.ts').init} */
export const init = ({ productRepo }) => ({
  getById: {
    access: 'common',
    handle: async (_, params) => {
      const { id } = params;

      return productRepo.findOne({ id });
    },
  },

  getAll: {
    access: 'common',
    handle: async (_) => {
      return productRepo.findMany({});
    },
  },

  getByCategory: {
    access: 'common',
    handle: async (_, params) => {
      const { id } = params;

      return productRepo.findByCategory(id);
    },
  },
});
