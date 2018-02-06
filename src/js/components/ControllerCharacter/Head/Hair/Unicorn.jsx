/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string} from 'prop-types';

const Unicorn = ({primary, secondary, tertiary}) => {

  return (
    <g id='unicorn' transform='translate(-32.000000, 0.000000)'>
      <g id='Group-61' transform='translate(0.000000, 44.000000)'>
          <path d='M156.154951,19.8230025 C160.426303,2.29286364 177.285038,-2.80791919 191.979762,1.39603283 C204.191656,4.89026263 213.552142,3.56759848 216.366692,3.0210202 C216.820503,2.93299621 216.949044,3.15052146 216.653721,3.50584343 C214.821431,5.71197348 209.161002,13.2857235 206.35152,25.6763674 C202.975811,40.5620997 190.432197,52.879928 173.056532,48.2584381 C173.010921,48.2459949 172.947341,48.2091263 172.91463,48.1750227 C172.201433,47.4330404 165.017397,40.1399533 157.839811,39.7560581 C150.2766,39.3518851 156.154951,19.8230025 156.154951,19.8230025' id='Fill-55' fill={secondary}></path>
          <path d='M60.6577658,19.8230025 C56.3864134,2.29286364 39.5276788,-2.80791919 24.8329548,1.39603283 C12.6215217,4.89026263 3.26057473,3.56759848 0.445564119,3.0210202 C-0.00778619958,2.93299621 -0.136788323,3.15052146 0.158995117,3.50584343 C1.99128599,5.71197348 7.65171486,13.2857235 10.4611968,25.6763674 C13.8369059,40.5620997 26.3800588,52.879928 43.7561841,48.2584381 C43.8017955,48.2459949 43.8653752,48.2091263 43.8980864,48.1750227 C44.6112839,47.4330404 51.79532,40.1399533 58.9729059,39.7560581 C66.5361161,39.3518851 60.6577658,19.8230025 60.6577658,19.8230025' id='Fill-57' fill={secondary}></path>
          <path d='M181.661158,63.7044823 C162.215931,71.0920455 136.557409,70.9722222 108.429417,70.9722222 C80.3014259,70.9722222 54.6429036,71.0920455 35.1976764,63.7044823 C45.7095066,34.6703914 74.5258166,4.60858586 108.429417,4.60858586 C142.333018,4.60858586 171.149328,34.6703914 181.661158,63.7044823' id='Fill-59' fill={primary}></path>
      </g>
      <g id='Group-64' transform='translate(100.000000, 0.000000)'>
          <mask id='mask-2' fill='white'>
              <use xlinkHref='#hair-unicorn-1'></use>
          </mask>
          <g id='Clip-63'></g>
          <path d='M16.6679333,72.2560976 C16.6679333,72.7591463 12.9657111,75 8.40404444,75 C3.84237778,75 0.140155556,72.7591463 0.140155556,72.2560976 C0.140155556,72.242378 0.144877778,72.2240854 0.1496,72.2103659 L8.15754444,0.655335366 C8.21846111,0.109756098 9.03871111,0.112042683 9.09679444,0.658079268 L16.6679333,72.2560976 Z' id='Fill-62' fill={tertiary}></path>
      </g>
    </g>
  );
};

Unicorn.propTypes = {
  primary: string.isRequired,
  secondary: string.isRequired,
  tertiary: string.isRequired
};

export default Unicorn;