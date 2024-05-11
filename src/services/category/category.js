/** @type {import('./types.js').init} */
export const init = ({ categoryRepo }) => ({
  getAll: {
    access: 'common',
    handle: async (_) => {
      return categoryRepo.findMany({});
    },
  },
});
