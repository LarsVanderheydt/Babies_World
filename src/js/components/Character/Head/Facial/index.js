/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Superman from './Superman';
import Evil from './Evil';
import Cigar from './Cigar';

const Facial = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Superman`:
          return <Superman  color={character.facialHairColor.Superman} />;

        case `Evil`:
          return <Evil color={character.facialHairColor.Evil} />;

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
