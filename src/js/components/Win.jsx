import React from 'react';
import {string, bool, func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Carousel from './Carousel';
import Controller from './Controller';

const Win = ({name, play, setPlay}) => {

  const handlePlay = () => {
    setPlay(true);
  };

  return (
    !play ? (
      <div className='win_lose_screen'>
        <Carousel choosingVehicle={false} page='win' />

        <h1 className='win_lose_greeting'>Welkom {name}</h1>

        <div className='win_lose_text_div'>
          <div>
            <p>U hebt zonder problemen een kind op de digitale wereld gebracht,</p>
            <p>maar niet iedereen heeft zoveel succes.</p>
            <p>Vanaf 30 jaar verminderd de kans op zwangerschap, dus wacht niet te lang. (?)</p>
          </div>

          <p className='win_lose_second_par'>Speel het spel of deel je baby en maak kans op een gratis drankje.</p>
        </div>

        <button className='win_lose_button' onClick={handlePlay}>speel</button>

      </div>

    ) : (
      <Controller name={name} />
    )
  );
};

Win.propTypes = {
  name: string.isRequired,
  play: bool.isRequired,
  setPlay: func.isRequired
};

// export default Win;

export default inject(
  ({store}) => {
    return ({
      name: store.name,
      play: store.play,
      setPlay: store.setPlay
    });
  }
 )(
   observer(Win)
 );
