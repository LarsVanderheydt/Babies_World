/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import Default from './Default';
import Angry from './Angry';
import Sunglasses from './Sunglasses';
import Blush from './Blush';
import Chinese from './Chinese';
import Glasses from './Glasses';

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

        case `Blush`:
          return <Blush color={character.eyesColor.Blush} />;

        case `Chinese`:
          return <Chinese color={character.eyesColor.Chinese} />;

        case `Glasses`:
          return <Glasses color={character.eyesColor.Glasses} />;

        }
      })()}
    </g>
  );
};

Eyes.propTypes = {
  type: string.isRequired,
  character: object.isRequired
};

export default Eyes;
