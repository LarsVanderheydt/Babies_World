const Hapi = require(`hapi`);
const inert = require(`inert`);
const Path = require(`path`);

// const server = new Hapi.Server({ port: 3000, host: 'localhost' });
const server = new Hapi.Server({
  port: process.env.PORT || 8000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, `dist`)
    }
  }
});

const io = require(`socket.io`)(server.listener);
const users = {};
const playing = [];

io.on(`connection`, socket => {

  users[socket.id] = {
    id: socket.id,
    x: 10,
    y: 10,
    playing: false,
    character: {}
  };

  socket.on(`update`, data => {
    if (!data || !data.x || !data.y || !users[socket.id]) {
      return;
    }
    users[socket.id].x = data.x;
    users[socket.id].y = data.y;
  });

  socket.on(`playing`, bool => {
    users[socket.id].playing = bool;
    playing.push(users[socket.id].playing);
  });

  socket.on(`setCharacter`, character => {
    users[socket.id].character = character;
  });

  socket.on(`disconnect`, () => {
    delete users[socket.id];
  });

});

const provision = async () => {

  await server.register(inert);

  server.route({
    method: `GET`,
    path: `/{param*}`,
    handler: {
      directory: {
        path: `.`,
        redirectToSlash: true,
        index: true,
      }
    }
  });

  await server.start();

  setInterval(() => {
    io.sockets.emit(`update`, users);
  }, 100);

  console.log(`Server running at:`, server.info.uri);
};

provision();
