import React from 'react';
import {string} from 'prop-types';

const Chinese = ({color}) => {
  console.log(color);
  return (
    <g id='Group-14' transform='translate(40.000000, 147.000000)'>
        <g id='Group-6'>
            <mask id='mask-200' fill='white'>
                <use xlinkHref='#eyes-chinese-1'></use>
            </mask>
            <g id='Clip-5'></g>
            <polygon id='Fill-4' fill={color} mask='url(#mask-200)' points='-11.459375 27.4064 28.716125 27.4064 28.716125 -12.0148 -11.459375 -12.0148'></polygon>
        </g>
        <g id='Group-9' transform='translate(53.000000, 0.000000)'>
            <mask id='mask-400' fill='white'>
                <use xlinkHref='#wings-chinese-2'></use>
            </mask>
            <g id='Clip-8'></g>
            <polygon id='Fill-7' fill={color} mask='url(#mask-400)' points='-9.958375 27.4176 30.21475 27.4176 30.21475 -12.0148 -9.958375 -12.0148'></polygon>
        </g>
        <g id='Group-12' transform='translate(53.000000, 18.000000)'>
            <mask id='mask-600' fill='white'>
                <use xlinkHref='#eyes-wings-3'></use>
            </mask>
            <g id='Clip-11'></g>
            <polygon id='Fill-10' fill='#53515B' mask='url(#mask-600)' points='-10.9992 7.0675 23.0424 7.0675 23.0424 -3.8475 -10.9992 -3.8475'></polygon>
        </g>
        <g id='Group-15' transform='translate(8.000000, 18.000000)'>
            <mask id='mask-100' fill='white'>
                <use xlinkHref='#eyes-wings-4'></use>
            </mask>
            <g id='Clip-14'></g>
            <polygon id='Fill-13' fill='#53515B' mask='url(#mask-100)' points='-11.0448 7.0675 22.9968 7.0675 22.9968 -3.8475 -11.0448 -3.8475'></polygon>
        </g>
    </g>
  );
};

Chinese.propTypes = {
  color: string.isRequired
};

export default Chinese;
