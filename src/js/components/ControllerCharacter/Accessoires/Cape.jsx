import React from 'react';
import {string} from 'prop-types';

const Cape = ({color}) => {

  return (
    <g id='superman' transform='translate(24.000000, 9.000000)' fill={color}>
        <path d='M138,290.549013 C120.266667,277.559677 102.639733,198 102.639733,198 L75,200.703173 L47.3602667,198 C47.3602667,198 29.7333333,277.559677 12,290.549013 C34.3748,274.940471 47.8241333,293.357956 68.7564667,297.992365 L68.4750667,298.823219 C70.737,299.03476 72.9074667,299.049141 75,298.90533 C77.0925333,299.049141 79.263,299.03476 81.5249333,298.823219 L81.2435333,297.992365 C102.175867,293.357956 115.6252,274.940471 138,290.549013' id='cape'></path>
    </g>
  );
};

Cape.propTypes = {
  color: string.isRequired
};

export default Cape;