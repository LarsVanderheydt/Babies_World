/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Balloon from './Balloon';
import Nutella from './Nutella';
import Cape from './Cape';

const Accessoires = ({character}) => {

  return (
    <g id='accessoires'>
      {
        (() => {
          switch (character.accessoire) {
          case `Balloon`:
            return <Balloon color={character.accessoireColor.Balloon} />;

          case `Nutella`:
            return <Nutella color={character.accessoireColor.Nutella} />;

          case `Cape`:
            return <Cape color={character.accessoireColor.Cape} />;
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
