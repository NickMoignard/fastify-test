import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import fastifyPostgres from '@fastify/postgres';

import { DB_NAME, DB_PASS, DB_PORT, DB_USER } from './environment';

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function db(fastify: FastifyInstance, options: FastifyPluginOptions) {
  const uri = `postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`;
  console.log(`Connecting to ${uri}`);
  fastify.register(fastifyPostgres, {
    url: uri,
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export const dbConnector = fastifyPlugin(db);
