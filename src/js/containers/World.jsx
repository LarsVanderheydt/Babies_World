import React from 'react';
import io from 'socket.io-client';
//import {} from 'prop-types'
//import {inject, observer} from 'mobx-react'

const World = () => {
  const socket = io.connect(`http://localhost:8000`);

  let connectionUrlEl;
  let bal;


  const init = () => {
    connect();
  };

  const connect = () => {


    socket.on(`sid`, sid => {
      connectionUrlEl.textContent = `controller/${sid}`;
    });

    socket.on(`update`, data => {
      console.log(data);
      bal.style.left = `${100 * data.x  }%`;
      bal.style.top = `${100 * data.y  }%`;
    });
  };

  init();

  return (
    <div>
      <p ref={$el => connectionUrlEl = $el}></p>
      <div ref={$el => bal = $el} className='bal'>

      </div>
    </div>
  );
};

//World.propTypes = {
//  : .isRequired
//};

export default World;

/*
export default inject(

 )(
   observer(World)
 );
 */
