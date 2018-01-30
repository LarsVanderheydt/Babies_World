/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Superman from './Superman';
import Evil from './Evil';
import Glasses from './Glasses';

const Eyes = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Superman`:
          return <Superman color={character.eyesColor.Superman} />;

        case `Evil`:
          return <Evil color={character.eyesColor.Evil} />;

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

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Eyes)
 );
