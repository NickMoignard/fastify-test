import Fastify from 'fastify';
import { routes } from './modules/hello-world/routes';
import { dbConnector } from './database';

const fastify = Fastify({
  logger: true,
});

fastify.register(dbConnector);
fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
