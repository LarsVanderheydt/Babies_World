/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';

import Superman from './Superman';
import Tats from './Tats';
import KaaDrie from './KaaDrie';
import Suit from './Suit';
import Bride from './Bride';
import Default from './Default';

const Body = ({character}) => {

  return (
    <g id='body'>
      {
        (() => {
          switch (character.bodyType) {
          case `Default`:
            return <Default color={character.bodyTypeColor.color} />;

          case `Superman`:
            return <Superman />;

          case `Tats`:
            return <Tats color={character.bodyTypeColor.color} />;

          case `KaaDrie`:
            return <KaaDrie color={character.bodyTypeColor.color} />;

          case `Suit`:
            return <Suit />;

          case `Bride`:
            return <Bride color={character.bodyTypeColor.color} />;

          }
        })()
      }
    </g>
  );
};

Body.propTypes = {
  character: object.isRequired
};

export default Body;
