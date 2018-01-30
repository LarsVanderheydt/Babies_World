/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Superman from './Superman';
import Evil from './Evil';
import Unicorn from './Unicorn';
import Suit from './Suit';
import Bride from './Bride';

const Body = ({character}) => {

  return (
    <g id='body'>
      {
        (() => {
          switch (character.bodyType) {
          case `Superman`:
            return <Superman />;

          case `Evil`:
            return <Evil color={character.bodyTypeColor.color} />;

          case `Unicorn`:
            return <Unicorn color={character.bodyTypeColor.color} />;

          case `Suit`:
            return <Suit />;

          case `Bride`:
            return <Bride color={character.bodyTypeColor.color} />;

          default:

          }
        })()
      }
    </g>
  );
};

Body.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Body)
 );
