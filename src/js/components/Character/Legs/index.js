/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Superman from './Superman';
import Evil from './Evil';
import Unicorn from './Unicorn';
import Suit from './Suit';

const Legs = ({character}) => {

  return (
    <g id='legs'>
      {
        (() => {
          switch (character.legs) {
          case `Superman`:
            return <Superman />;

          case `Evil`:
            return <Evil />;

          case `Unicorn`:
            return <Unicorn color={character.bodyTypeColor.color} />;

          case `Suit`:
            return <Suit />;

          }
        })()
      }
    </g>
  );
};

Legs.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Legs)
 );
