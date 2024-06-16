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

  update: async (id, user) => {
    const set = [];
    const params = [];

    if (user.username) {
      set.push(`"username" = $${params.length + 1}`);
      params.push(user.username);
    }

    if (user.email) {
      set.push(`"email" = $${params.length + 1}`);
      params.push(user.email);
    }

    const query = `
      UPDATE "user"
      SET ${set.join(', ')}
      WHERE "id" = $${params.length + 1}
      RETURNING *;
    `;
    params.push(id);

    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },

  findByEmail: async (email) => {
    const query = 'SELECT * FROM "user" WHERE "email" = $1;';
    const params = [email];
    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },

  findByUsername: async (username) => {
    const query = 'SELECT * FROM "user" WHERE "username" = $1;';
    const params = [username];
    const { rows } = await pgPool.query(query, params);

    return rows[0];
  },
});
