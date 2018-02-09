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

io.on(`connection`, socket => {

  users[socket.id] = {
    id: socket.id,
    x: 1,
    y: 1,
    place: ``,
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
    if (bool === false) {
      users[socket.id].x = 1;
      users[socket.id].y = 1;
    }
  });

  socket.on(`setCharacter`, data => {
    users[socket.id].character = data.character;
    users[socket.id].place = data.place;
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
