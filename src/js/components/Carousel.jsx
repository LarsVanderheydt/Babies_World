import React from 'react';
import {bool, string} from 'prop-types';
//import {inject, observer} from 'mobx-react'

const Carousel = ({choosingVehicle, page}) => {

  return (
    <div className={choosingVehicle ? `carousel_div_vehicle` : `carousel_div_name`}>
      <div className={page === `vehicles` ? `carousel_item` : `carousel_item_win_lose`} id='carousel_item_1'></div>
    </div>
  );
};

Carousel.propTypes = {
  choosingVehicle: bool.isRequired,
  page: string.isRequired
};

export default Carousel;

/*
export default inject(

 )(
   observer(Carousel)
 );
 */
