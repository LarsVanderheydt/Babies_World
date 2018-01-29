/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string} from 'prop-types';
//import {inject, observer} from 'mobx-react'
import Superman from './Superman';
import Evil from './Evil';
import Unicorn from './Unicorn';

const Eyes = ({type}) => {

  return (
    <g>
      {(() => {
        switch (type) {
        case `Superman`:
          return <Superman />;

        case `Evil`:
          return <Evil />;

        case `Unicorn`:
          return <Unicorn />;

        default:

        }
      })()}
    </g>
  );
};

Eyes.propTypes = {
  type: string.isRequired
};

export default Eyes;
