import Fastify from "fastify";

import routes from "./routes/items.js";

const PORT = 5000;

const fastify = Fastify({
  logger: true,
});

await fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
