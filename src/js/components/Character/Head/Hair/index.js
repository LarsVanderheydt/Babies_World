/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Superman from './Superman';
import Evil from './Evil';
import Unicorn from './Unicorn';
import Trump from './Trump';
import Bride from './Bride';

const Hair = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Superman`:
          return <Superman color={character.hairColor.Superman} />;

        case `Evil`:
          return <Evil color={character.hairColor.Evil} />;

        case `Unicorn`:
          return <Unicorn primary={character.hairColor.Unicorn.primary} secondary={character.hairColor.Unicorn.secondary} tertiary={character.hairColor.Unicorn.tertiary} />;

        case `Trump`:
          return <Trump primary={character.hairColor.Trump.primary} secondary={character.hairColor.Trump.secondary} />;

        case `Bride`:
          return <Bride />;

        }
      })()}
    </g>
  );
};

Hair.propTypes = {
  type: string.isRequired,
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Hair)
 );
