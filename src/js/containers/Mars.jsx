import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';
import openSocket from 'socket.io-client';

const Mars = ({character}) => {
  let socketIds = [];

  const socket = openSocket(`http://localhost:8000`);
  window.addEventListener(`mousemove`, e => handleMouseMove(e));

  const handleMouseMove = event => {
    if (socket) {
      socket.emit(`update`, {
        x: event.clientX,
        y: event.clientY,
        color: character.hairColor.Superman,
        place: `mars`
      });
    }
  };

  socket.on(`connect`, () => {
    console.log(`connected`);
    console.log(character);
  });


  socket.emit(`setCharacter`, character);

  socket.on(`character`, char => {
    console.log(char);
  });

  socket.on(`update`, users => {
    const currentSocketIds = [];
    for (const clientId in users) {
      currentSocketIds.push(clientId);
      if (users[clientId].place === `mars`) {
        let div = document.getElementById(`bal${clientId}`);
        if (!div) {
          div = document.createElement(`div`);
          div.classList.add(`bal`);
          div.setAttribute(`id`, `bal${clientId}`);
          document.body.appendChild(div);
        }
            //div.style.background = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
        div.style.left = `${users[clientId].x  }px`;
        div.style.top = `${users[clientId].y  }px`;
        div.style.background = `${users[clientId].color}`;
        div.style.fill = `${users[clientId].color}`;
      }

    }

    const disconnectedClients = socketIds.filter(clientId => {
      return currentSocketIds.indexOf(clientId) === - 1;
    });

    disconnectedClients.forEach(clientId => {
      const div = document.getElementById(`bal${clientId}`);
      if (div) {
        div.parentNode.removeChild(div);
      }
    });
    socketIds = currentSocketIds;
  });

  return (
    <div>
      <h1>Hello world</h1>
      <div>

      </div>
    </div>
  );
};

Mars.propTypes = {
  character: object.isRequired
};

// export default Mars;

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Mars)
 );
