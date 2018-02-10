/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string} from 'prop-types';
import Unicorn from './Unicorn';
import Stork from './Stork';

const Partner = ({partner}) => {

  return (
    <g>
      {
        (() => {
          switch (partner) {
          case `Unicorn`:
            return <Unicorn />;
          case `Stork`:
            return <Stork />;
          }
        })()
      }
    </g>
  );
};

Partner.propTypes = {
  partner: string.isRequired
};

export default Partner;
