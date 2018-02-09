import React from 'react';
import {func} from 'prop-types';
import {inject, observer} from 'mobx-react';

const BackBtn = ({setPartnerPage}) => {

  const handleBackClick = () => {
    setPartnerPage(true);
  };

  return (
    <svg className='back_btn' width='13px' height='21px' viewBox='0 0 13 21' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={handleBackClick}>
      <polygon transform='translate(-4.000000, 4.000000)' fill='#901947' points='4.25 6.25 14.75 -4.25 16.75 -2.25 8.25 6.25 16.75 14.75 14.75 16.75'></polygon>
    </svg>
  );
};

BackBtn.propTypes = {
  setPartnerPage: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setPartnerPage: store.setPartnerPage
    });
  }
 )(
   observer(BackBtn)
 );
