/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string} from 'prop-types';

const Evil = ({color}) => {

  return (
    <g id='evil' transform='translate(0.000000, 53.000000)'>
      <g id='haar' transform='translate(68.000000, 25.000000)' fill={color}>
          <path d='M6,3 C6,4.6565 4.6565,6 3,6 C1.3435,6 0,4.6565 0,3 C0,1.3435 1.3435,0 3,0 C4.6565,0 6,1.3435 6,3' id='Fill-52'></path>
          <path d='M6,17 C6,18.6565 4.6565,20 3,20 C1.3435,20 0,18.6565 0,17 C0,15.3435 1.3435,14 3,14 C4.6565,14 6,15.3435 6,17' id='Fill-54'></path>
          <path d='M6,31 C6,32.6565 4.6565,34 3,34 C1.3435,34 0,32.6565 0,31 C0,29.3435 1.3435,28 3,28 C4.6565,28 6,29.3435 6,31' id='Fill-56'></path>
          <path d='M17,3 C17,4.6565 15.6565,6 14,6 C12.3435,6 11,4.6565 11,3 C11,1.3435 12.3435,0 14,0 C15.6565,0 17,1.3435 17,3' id='Fill-58'></path>
          <path d='M17,17 C17,18.6565 15.6565,20 14,20 C12.3435,20 11,18.6565 11,17 C11,15.3435 12.3435,14 14,14 C15.6565,14 17,15.3435 17,17' id='Fill-60'></path>
          <path d='M17,31 C17,32.6565 15.6565,34 14,34 C12.3435,34 11,32.6565 11,31 C11,29.3435 12.3435,28 14,28 C15.6565,28 17,29.3435 17,31' id='Fill-62'></path>
      </g>
    </g>
  );
};

Evil.propTypes = {
  color: string.isRequired
};

export default Evil;
