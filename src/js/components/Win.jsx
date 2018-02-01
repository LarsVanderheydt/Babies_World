import React from 'react';
import {string, bool, func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import SvgCharacter from './Character/SvgCharacter';

import Partners from './Partners';

const Win = ({name, play, setPlay, backToInfo, setPartnerPage, win}) => {
  console.log(play);

  const handlePlay = () => {
    setPlay(true);
    backToInfo(false);
    setPartnerPage(true);
  };

  return (
    !play ? (
      <div className='win_lose_screen'>
        <SvgCharacter />

        {
          win ? (
            <h1 className='win_lose_greeting'>Welkom {name}</h1>
          ) : (
            <h1 className='win_lose_greeting'>Het spijt ons</h1>
          )
        }

        <div className='win_lose_text_div'>
          {
            win ? (
              <div>
                <p>U hebt zonder problemen een kind op de digitale wereld gebracht,</p>
                <p>maar niet iedereen heeft zoveel succes.</p>
                <p>Vanaf 30 jaar verminderd de kans op zwangerschap, dus wacht niet te lang. (?)</p>
              </div>
            ) : (
              <div>
                <p>{name} is niet succesvol op de wereld gezet… </p>
                <p>Je hebt er iets te lang over gedaan.</p>
                <p>Gelukkig is dit een spel en krijg je hier een tweede kans.</p>
                <p>In het echte leven is dit niet zo! Vanaf 30 jaar verkleint de kans op zwangerschap. (?)</p>
              </div>
            )
          }

          {
            win ? (
              <p className='win_lose_second_par'>Speel het spel of deel je baby en maak kans op een gratis drankje.</p>
            ) : (
              <p className='win_lose_second_par'>Probeer opnieuw en maak kans op een gratis drankje.</p>
            )
          }

        </div>

        <button className='win_lose_button' onClick={handlePlay}>speel</button>

      </div>

    ) : <Partners />

  );
};

Win.propTypes = {
  name: string.isRequired,
  play: bool.isRequired,
  setPlay: func.isRequired,
  backToInfo: func.isRequired,
  setPartnerPage: func.isRequired,
  win: bool.isRequired
};

// export default Win;

export default inject(
  ({store}) => {
    return ({
      name: store.name,
      play: store.play,
      setPlay: store.setPlay,
      backToInfo: store.backToInfo,
      setPartnerPage: store.setPartnerPage
    });
  }
 )(
   observer(Win)
 );
