import { apiError } from '../exceptions/apiError.js';

/** @type {import('./types').BodyParser} */
export const bodyParser = {
  parse: async (req) => {
    try {
      const buffers = [];
      for await (const chunk of req) buffers.push(chunk);
      const data = Buffer.concat(buffers).toString();
      return JSON.parse(data);
    } catch (err) {
      throw apiError.badRequest(
        `Failed to parse args${err instanceof Error ? ': ' + err.message : ''}.`,
      );
    }
  },
};
