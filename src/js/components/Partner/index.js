/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {number, func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Unicorn from './Unicorn';
import Stork from './Stork';

const Partner = ({partner, setPartner}) => {

  const onPrevClick = () => {
    partner --;
    setPartner(partner);
  };

  const onNextClick = () => {
    partner ++;
    setPartner(partner);
  };

  return (
    <div className='partners_page_div'>
      <svg width='9px' height='14px' viewBox='0 0 9 14' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={onPrevClick}>
        <polygon id='Back-button' transform='translate(-2.000000, 3.000000)' fill='#9B1B51' points='2.63095238 3.84615385 9.13095238 -2.61538462 10.3690476 -1.38461538 5.10714286 3.84615385 10.3690476 9.07692308 9.13095238 10.3076923'></polygon>
      </svg>

      <svg width='271px' height='265px' viewBox='0 0 271 265' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <defs>
            <polygon id='path-1' points='0.409542344 0.0697964379 29.9689498 0.0697964379 29.9689498 75 0.409542344 75'></polygon>
            <polygon id='path-3' points='0 0 13 0 13 43 0 43'></polygon>
        </defs>
        <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <circle id='Pink-oval' fill='#9B1B51' cx='140' cy='112' r='102.5'></circle>
          <ellipse id='Pink-oval' fill='#9B1B51' opacity='0.100000001' cx='140' cy='250' rx='87.5' ry='10'></ellipse>
          {
            (() => {
              switch (partner) {
              case 0:
                return <Unicorn />;
              case 1:
                return <Stork />;
              }
            })()
          }
        </g>
      </svg>


      <svg width='9px' height='14px' viewBox='0 0 9 14' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={onNextClick}>
        <g id='' transform='rotate(90.000000) translate(-2.000000, 3.000000)' fill='#9B1B51'>
          <polygon id='Back-button' transform='rotate(90.000000)' points='2.63095238 3.84615385 9.13095238 -2.61538462 10.3690476 -1.38461538 5.10714286 3.84615385 10.3690476 9.07692308 9.13095238 10.3076923'></polygon>
        </g>
      </svg>

    </div>
  );
};

Partner.propTypes = {
  partner: number.isRequired,
  setPartner: func.isRequired
};

// export default Partner;


export default inject(
  ({store}) => {
    return ({
      partner: store.partner,
      setPartner: store.setPartner
    });
  }
 )(
   observer(Partner)
 );
