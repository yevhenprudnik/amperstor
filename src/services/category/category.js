/** @type {import('./types.js').init} */
export const init = ({ categoryRepo }) => ({
  getAll: {
    access: 'common',
    handle: async () => {
      return categoryRepo.findMany({});
    },
  },

  getById: {
    access: 'common',
    handle: async (_, params) => {
      const { id } = params;
      return categoryRepo.findOne({ id });
    },
  },

  getByTitle: {
    access: 'common',
    handle: async (_, args) => {
      const { title } = args;

      const query = 'SELECT * FROM CATEGORY WHERE LOWER("title") LIKE $1;';
      const params = [`%${title.toLowerCase()}%`];
      const { rows } = await categoryRepo.query(query, params);

      return rows;
    },
  },

  create: {
    access: 'admin',
    handle: async (_, params) => {
      const { title } = params;
      return categoryRepo.create({ title });
    },
  },

  update: {
    access: 'admin',
    handle: async (_, params) => {
      const { id, title } = params;
      return categoryRepo.update(id, { title });
    },
  },
});
