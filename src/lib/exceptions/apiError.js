export class ApiError extends Error {
  /** @param {number} code, @param {string} message */
  constructor(code, message) {
    super(message);
    this.statusCode = code;
  }
}

/** @type {import('./types').ApiError} */
export const apiError = {
  badRequest(message = 'Bad Request') {
    return new ApiError(400, message);
  },

  unauthorized(message = 'Unauthorized') {
    return new ApiError(401, message);
  },

  forbidden(message = 'Forbidden') {
    return new ApiError(403, message);
  },

  notFound(message = 'Not Found') {
    return new ApiError(404, message);
  },
};
