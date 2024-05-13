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

  getByTitle: {
    access: 'common',
    handle: async (_, args) => {
      const { title } = args;

      const query = 'SELECT * FROM PRODUCT WHERE LOWER("title") LIKE $1;';
      const params = [`%${title.toLowerCase()}%`];
      const { rows } = await productRepo.query(query, params);

      return rows;
    },
  },

  create: {
    access: 'admin',
    handle: async (_, params) => {
      const { title, price, count, description, media } = params;
      return productRepo.create({ title, price, count, description, media });
    },
  },

  update: {
    access: 'admin',
    handle: async (_, params) => {
      const { id, title, price, count, description, media } = params;
      return productRepo.update(id, {
        title,
        price,
        count,
        description,
        media,
      });
    },
  },
});
