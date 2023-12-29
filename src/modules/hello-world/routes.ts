import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';

export async function getHelloWorld(req: FastifyRequest, reply: FastifyReply) {
  return { hello: 'world' };
}

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', getHelloWorld);
}
