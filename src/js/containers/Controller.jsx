import io from 'socket.io-client';
import React from 'react';
import {string} from 'prop-types';
//import {inject, observer} from 'mobx-react'

const Controller = ({targetId}) => {
  const socket = io.connect(`http://localhost:8000`);

  const init = () => {
    if (!targetId) {
      console.error(`missing target id in querystring`);
      return;
    }

    window.addEventListener(`mousemove`, e => {
      socket.emit(`update`, targetId, {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    });

    window.addEventListener(`touchmove`, e => {
      socket.emit(`update`, targetId, {
        x: e.touches[0].clientX / window.innerWidth,
        y: e.touches[0].clientY / window.innerHeight
      });
    });
  };

  init();

  return (
    <div>Controller</div>
  );
};

Controller.propTypes = {
  targetId: string.isRequired
};

export default Controller;

/*
export default inject(

 )(
   observer(Controller)
 );
 */
