/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string} from 'prop-types';

import Superman from './Superman';
import Evil from './Evil';

const Facial = ({type}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Superman`:
          return <Superman />;

        case `Evil`:
          return <Evil />;

        default:

        }
      })()}
    </g>
  );
};

Facial.propTypes = {
  type: string.isRequired
};

export default Facial;
