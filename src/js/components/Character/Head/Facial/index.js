/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Goatie from './Goatie';
import Pacifier from './Pacifier';
import Cigar from './Cigar';

const Facial = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Goatie`:
          return <Goatie  color={character.facialHairColor.Goatie} />;

        case `Pacifier`:
          return <Pacifier color={character.facialHairColor.Pacifier} />;

        case `Cigar`:
          return <Cigar color={character.facialHairColor.Cigar} />;

        }
      })()}
    </g>
  );
};

Facial.propTypes = {
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
   observer(Facial)
 );
