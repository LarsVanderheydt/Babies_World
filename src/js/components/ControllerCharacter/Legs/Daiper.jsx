import React from 'react';
import {string} from 'prop-types';

const Daiper = ({color}) => {
  return (
    <g id='pants' transform='translate(66.000000, 256.000000)'>
        <path d='M52.9733964,48 C52.9733964,48 53.4376821,32.6956522 56.6876821,29.4492754 C59.347575,26.7918841 64.797825,15.744 64.0452179,5.20857971 C16.580825,17.0703768 3.18664643,3.11976812 3.18664643,3.11976812 C3.122575,3.01727536 3.06361071,2.91107246 3.00139643,2.80811594 C3.05711071,2.94353623 3.11050357,3.08127536 3.16761071,3.21623188 C1.49246786,14.3109565 7.48361071,26.6235362 10.3125036,29.4492754 C13.5625036,32.6956522 14.0267893,48 14.0267893,48 C14.0267893,48 2.22511071,51.942029 1.491075,62.3768116 C1.491075,62.3768116 8.00036071,65.1983768 19.5982179,62.3768116 C30.0822536,59.826087 29.8125036,56.8115942 29.8125036,56.8115942 L30.2767893,47.5362319 C30.2767893,47.5362319 30.903575,36.2555362 30.0056464,25.1622029 C31.6311107,25.388058 33.3155393,25.5072464 35.060325,25.5072464 C35.7080036,25.5072464 36.3436107,25.4886957 36.9703964,25.4566957 C36.106825,36.454029 36.7233964,47.5362319 36.7233964,47.5362319 L37.1876821,56.8115942 C37.1876821,56.8115942 36.9174679,59.826087 47.4019679,62.3768116 C58.9993607,65.1983768 65.5091107,62.3768116 65.5091107,62.3768116 C64.7746107,51.942029 52.9733964,48 52.9733964,48' id='Fill-36' fill={color}></path>
        <path d='M1.33790714,0 C1.33790714,1.85507246 3.19505,4.17391304 3.19505,4.17391304 C33.3736214,14.3768116 18.9807643,26.6151884 33.3736214,26.8985507 C33.4636929,26.9004058 33.5477286,26.8985507 33.6354786,26.8990145 C33.7014071,26.899942 33.77105,26.8985507 33.8379071,26.8990145 C33.9047643,26.8985507 33.9744071,26.899942 34.0403357,26.8990145 C34.1280857,26.8985507 34.2121214,26.9004058 34.3021929,26.8985507 C48.2210143,26.6244638 34.7878357,16.4711884 61.1820143,6.57484058 C61.9341571,6.39768116 63.65805,5.984 64.0257643,5.82724638 C64.4984071,5.62597101 65.6674786,1.44371014 65.6674786,1.44371014 C29.7108714,9.38017391 6.90933571,1.85507246 1.33790714,0' id='Fill-38' fill='#771a9d'></path>
    </g>
  );
};

Daiper.propTypes = {
  color: string.isRequired
};

export default Daiper;