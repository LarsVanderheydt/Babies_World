/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

const Info = ({setInfo}) => {

  const onBackClick = () => {
    setInfo(false);
  };

  return (
    <div>
      <svg className='back_btn' width='13px' height='21px' viewBox='0 0 13 21' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={onBackClick}>
        <polygon transform='translate(-4.000000, 4.000000)' fill='#858E98' points='4.25 6.25 14.75 -4.25 16.75 -2.25 8.25 6.25 16.75 14.75 14.75 16.75'></polygon>
      </svg>

      <PageOne />

      <PageTwo />

      <PageThree />

    </div>
  );
};

Info.propTypes = {
  setInfo: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setInfo: store.setInfo
    });
  }
 )(
   observer(Info)
 );
