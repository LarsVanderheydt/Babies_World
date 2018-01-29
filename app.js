const Hapi = require(`hapi`);
const inert = require(`inert`);
const shortid = require(`shortid`);
const server = Hapi.server({
  host: `0.0.0.0`,
  port: process.env.PORT || 8000,
});

const io = require(`socket.io`)(server.listener);
const users = {};

io.on(`connection`, socket => {
  const sid = shortid.generate();

  socket.emit(`sid`, sid);

  users[sid] = {
    id: socket.id
  };

  // socket.on(`setCharacter`, data => {
  //   if (!data || !users[socket.id]) {
  //     return;
  //   }
  //   users[socket.id].character = data;
  //
  //   io.sockets.emit(`character`, data);
  // });

  socket.on(`update`, (targetId, data) => {
    // if the target user does not exist, ignore it
    if (!users[targetId]) {
      return;
    }
    // send an update to that particular socket
    socket.to(users[targetId].id).emit(`update`, data);
  });

  socket.on(`disconnect`, () => {
    console.log(`disconnect`);
    delete users[sid];
  });

});


// Start the server
async function start() {

  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server running at:`, server.info.uri);
}

start();

server.register(inert, err => {
  if (err) {
    throw err;
  }
  server.route({
    method: `GET`,
    path: `/{param*}`,
    handler: {
      directory: {
        path: `./dist`, redirectToSlash: true, index: true
      }
    }
  });
});
