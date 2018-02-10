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
    character: {},
    points: 0,
    name: ``
  };

  socket.on(`update`, data => {
    if (!data || !data.x || !data.y || !users[socket.id]) {
      return;
    }
    users[socket.id].x = data.x;
    users[socket.id].y = data.y;
  });

  socket.on(`point`, id => {
    if (!id || !users[socket.id]) {
      return;
    }
    users[id].points += 1;
  });

  socket.on(`playing`, bool => {
    users[socket.id].playing = bool;
    if (bool === false) {
      users[socket.id].x = 1;
      users[socket.id].y = 1;
    }
  });

  socket.on(`setCharacter`, ({character, place, name}) => {
    users[socket.id].character = character;
    users[socket.id].place = place;
    users[socket.id].name = name;
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
