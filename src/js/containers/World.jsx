import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';
import openSocket from 'socket.io-client';

const World = ({character}) => {
  const socket = openSocket(`http://localhost:8000`);

  socket.on(`sid`, sid => {
    const connect = `controller/${sid}`;
    console.log(character);
    console.log(connect);
  });

  socket.on(`update`, data => {
    console.log(data);
  });

  return (
    <div>
      <h1>Hello earth</h1>
    </div>
  );
};

World.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(World)
 );
