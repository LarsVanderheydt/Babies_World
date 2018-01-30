/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Balloon from './Balloon';
import Nutella from './Nutella';

const Accessoires = ({character}) => {

  return (
    <g id='accessoires'>
      {
        (() => {
          switch (character.accessoire) {
          case `Balloon`:
            return <Balloon />;

          case `Nutella`:
            return <Nutella />;

          default:

          }
        })()
      }
    </g>
  );
};

Accessoires.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Accessoires)
 );
