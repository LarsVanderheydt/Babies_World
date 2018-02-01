/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Default from './Default';
import Angry from './Angry';
import Sunglasses from './Sunglasses';

const Eyes = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Default`:
          return <Default color={character.eyesColor.Default} />;

        case `Angry`:
          return <Angry color={character.eyesColor.Angry} />;

        case `Sunglasses`:
          return <Sunglasses color={character.eyesColor.Sunglasses} />;

        }
      })()}
    </g>
  );
};

Eyes.propTypes = {
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
   observer(Eyes)
 );
