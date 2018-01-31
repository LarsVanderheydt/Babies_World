const Hapi = require(`hapi`);
const inert = require(`inert`);
const Path = require(`path`);

// const server = new Hapi.Server({ port: 3000, host: 'localhost' });
const server = new Hapi.Server({
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, `dist`)
    }
  }
});

const provision = async () => {

  await server.register(inert);

  server.route({
    method: `GET`,
    path: `/`,
    handler: {
      directory: {
        path: `.`,
        redirectToSlash: true,
        index: true,
      }
    }
  });

  await server.start();

  console.log(`Server running at:`, server.info.uri);
};

provision();
