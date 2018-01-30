import React from 'react';
import {string} from 'prop-types';

const Evil = ({color}) => {

  return (
    <g id='fopspeen' transform='translate(54.000000, 178.000000)'>
        <path d='M31.5992553,25.6850984 C38.3261064,25.6850984 43.779766,20.0416453 43.779766,13.0802078 C43.779766,6.11877031 38.3261064,0.475317187 31.5992553,0.475317187 C27.7071277,0.475317187 26.207383,4.48012969 22.0138085,4.48012969 C17.4209574,4.48012969 16.3209574,0.475317187 12.4288298,0.475317187 C5.70151064,0.475317187 0.247851064,6.11877031 0.247851064,13.0802078 C0.247851064,20.0416453 5.70151064,25.6850984 12.4288298,25.6850984' id='Fill-40' fill={color}></path>
        <path d='M28.2042809,13.7001594 C28.2042809,17.1237219 25.5226213,19.8991906 22.2137277,19.8991906 C18.9053021,19.8991906 16.2231745,17.1237219 16.2231745,13.7001594 C16.2231745,10.2765969 18.9053021,7.50112812 22.2137277,7.50112812 C25.5226213,7.50112812 28.2042809,10.2765969 28.2042809,13.7001594' id='Fill-42' fill='#1B1464'></path>
        <path d='M31.1225106,21.5390906 C31.1225106,26.6303562 27.1339574,30.7577156 22.2139149,30.7577156 C17.2938723,30.7577156 13.3053191,26.6303562 13.3053191,21.5390906 C13.3053191,16.447825 17.2938723,12.3204656 22.2139149,12.3204656 C27.1339574,12.3204656 31.1225106,16.447825 31.1225106,21.5390906 Z' id='Stroke-44' stroke='#1B1464' strokeWidth='5'></path>
    </g>
  );
};

Evil.propTypes = {
  color: string.isRequired
};

export default Evil;
