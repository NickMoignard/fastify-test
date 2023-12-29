import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';

export /**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async function getHelloWorld(req: FastifyRequest, reply: FastifyReply) {
    req.log.info({ req }, 'Getting hello world');
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query('SELECT id, hello FROM hell_world WHERE id=$1', [
        '5336d286-b522-4543-8f54-d0b16ce2114f', // from local db
      ]);
      // Note: avoid doing expensive computation here, this will block releasing the client
      return rows;
    } finally {
      // Release the client immediately after query resolves, or upon error
      client.release();
    }
  });
}
