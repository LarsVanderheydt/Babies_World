/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Mohawk from './Mohawk';
import Default from './Default';
import Unicorn from './Unicorn';
import Trump from './Trump';
import Bride from './Bride';
import Curly from './Curly';

const Hair = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Default`:
          return <Default color={character.hairColor.Default} />;

        case `Mohawk`:
          return <Mohawk color={character.hairColor.Mohawk} />;

        case `Unicorn`:
          return <Unicorn primary={character.hairColor.Unicorn.primary} secondary={character.hairColor.Unicorn.secondary} tertiary={character.hairColor.Unicorn.tertiary} />;

        case `Trump`:
          return <Trump primary={character.hairColor.Trump.primary} secondary={character.hairColor.Trump.secondary} />;

        case `Bride`:
          return <Bride color={character.hairColor.Bride} />;

        case `Curly`:
          return <Curly color={character.hairColor.Curly} />;

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
