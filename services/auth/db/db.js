/** @type {import('./types.js').init} */
export const init = ({ pgPool }) => ({
  create: async (user) => {
    const fields = ['username', 'email', 'password'];
    const values = ['$1', '$2', '$3'];

    if (user.role) fields.push('role'), values.push('$4');
    if (user.discount) fields.push('discount'), values.push('$5');

    const query = `
      INSERT INTO "user"
      (${fields.toString()})
      VALUES (${values.toString()})
      RETURNING *;
    `;

    const params = [
      user.username,
      user.email,
      user.password,
      user.role,
      user.discount,
    ].filter((f) => f !== undefined);

    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },

  findById: async (id) => {
    const query = 'SELECT * FROM "user" WHERE "id" = $1;';
    const params = [id];
    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },

  findByEmail: async (email) => {
    const query = 'SELECT * FROM "user" WHERE "email" = $1;';
    const params = [email];
    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },
});
