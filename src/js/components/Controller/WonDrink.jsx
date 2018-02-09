import React from 'react';
import {func} from 'prop-types';
import SvgCharacter from '../Character/SvgCharacter';

const WonDrink = ({setWin}) => {
  document.body.classList.add(`won_drink`);

  const handleCollect = () => {
    document.body.classList.remove(`won_drink`);
    setWin(2);
  };

  return (
    <div className='wonDrink_content_div'>
      <h1>Proficiat!!</h1>

      <div onClick={handleCollect} >
        <SvgCharacter />
      </div>

      <p className='wonDrink_info'>Bedankt om je baby te delen. Hierdoor heb je zonet een gratis drankje (twv max. &euro;3) gewonnen.</p>

      <p className='wonDrink_instructions'>Toon dit scherm aan de barman/vrouw.</p>
    </div>
  );
};

WonDrink.propTypes = {
  setWin: func.isRequired
};

export default WonDrink;
