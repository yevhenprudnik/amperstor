import { createHmac } from 'node:crypto';
import { apiError } from '../exceptions/apiError.js';

const secret = 'hello';

/** @type {import('./types').Sessions} */
export const sessions = {
  generate: (user) => {
    const { id, role } = user;
    const payload = { id, role };

    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
      'base64',
    );
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
      'base64',
    );

    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const signature = createHmac('sha256', secret)
      .update(signatureInput)
      .digest('base64');

    const token = `${encodedHeader}.${encodedPayload}.${signature}`;

    return { user, token };
  },

  validate: (token) => {
    if (!token) throw apiError.unauthorized('No token provided.');

    const [encodedHeader, encodedPayload, signature] = token.split('.');
    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const expectedSignature = createHmac('sha256', secret)
      .update(signatureInput)
      .digest('base64');

    if (signature !== expectedSignature) apiError.unauthorized();

    const decodedPayload = JSON.parse(
      Buffer.from(encodedPayload, 'base64').toString(),
    );

    return decodedPayload;
  },
};
