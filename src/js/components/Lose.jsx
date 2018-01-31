import React from 'react';
import {string, bool, func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Carousel from './Carousel';
import Controller from './Controller';

const Lose = ({name, play, setPlay}) => {

  const handlePlay = () => {
    setPlay(true);
  };

  return (
    !play ? (
      <div className='win_lose_screen'>
        <Carousel choosingVehicle={false} page='win' />

        <h1 className='win_lose_greeting'>Het spijt ons</h1>

        <div className='win_lose_text_div'>
          <div>
            <p>{name} is niet succesvol op de wereld gezet… </p>
            <p>Je hebt er iets te lang over gedaan.</p>
            <p>Gelukkig is dit een spel en krijg je hier een tweede kans.</p>
            <p>In het echte leven is dit niet zo! Vanaf 30 jaar verkleint de kans op zwangerschap. (?)</p>
          </div>

          <p className='win_lose_second_par'>Probeer opnieuw en maak kans op een gratis drankje.</p>
        </div>

        <button className='win_lose_button' onClick={handlePlay}>speel</button>

      </div>

    ) : (
      <Controller name={name} />
    )
  );
};

Lose.propTypes = {
  name: string.isRequired,
  play: bool.isRequired,
  setPlay: func.isRequired
};

// export default Lose;

export default inject(
  ({store}) => {
    return ({
      name: store.name,
      play: store.play,
      setPlay: store.setPlay
    });
  }
 )(
   observer(Lose)
 );
