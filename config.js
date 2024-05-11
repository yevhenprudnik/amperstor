/** @type {import('./types/config.d.ts').Config} */
export const config = {
  server: {
    port: 8080,
  },
  db: {
    host: '127.0.0.1',
    port: 5432,
    database: 'electro_shop',
    user: 'postgres',
    password: 'postgres',
  },
  secret: 'SUPER_SECRET',
};
