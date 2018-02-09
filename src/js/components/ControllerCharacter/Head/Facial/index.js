/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, object} from 'prop-types';

import Goatie from './Goatie';
import Pacifier from './Pacifier';
import HeartPacifier from './HeartPacifier';
import Mouse from './Mouse';

const Facial = ({type, character}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Goatie`:
          return <Goatie  color={character.facialHairColor.Goatie} />;

        case `Pacifier`:
          return <Pacifier color={character.facialHairColor.Pacifier} />;

        case `HeartPacifier`:
          return <HeartPacifier color={character.facialHairColor.HeartPacifier} />;

        case `Mouse`:
          return <Mouse color={character.facialHairColor.Mouse} />;
        }
      })()}
    </g>
  );
};

Facial.propTypes = {
  type: string.isRequired,
  character: object.isRequired
};


export default Facial;
