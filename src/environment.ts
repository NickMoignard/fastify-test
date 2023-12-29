export const DB_NAME = Bun.env.TEST_DB_NAME ?? 'fastify_test';
export const DB_USER = Bun.env.TEST_DB_USER ?? 'fastify_test_user';
export const DB_PASS = Bun.env.TEST_DB_PASS ?? 'testpass';
export const DB_PORT = parseInt(Bun.env.TEST_DB_PORT ?? '5432');

console.log(Bun.env);
