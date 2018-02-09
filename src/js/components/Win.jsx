import React from 'react';
import {string, bool, func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import SvgCharacter from './Character/SvgCharacter';

import Partners from './Partners';
import Info from './Info';
import Restart from './Restart';

const Win = ({name, play, setPlay, backToInfo, setPartnerPage, win, setInfo, info}) => {

  const handlePlay = () => {
    setPlay(true);
    backToInfo(false);
    setPartnerPage(true);
  };

  const onInfoClick = () => {
    setInfo(true);
  };

  return (
    !info ? (
      !play ? (
        <div className='win_lose_screen'>

          <div className='win_lose_info'>
            <svg width='43px' height='43px' viewBox='0 0 43 43' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={onInfoClick}>
                <defs>
                    <circle id='path-1' cx='19.5' cy='19.5' r='19.5'></circle>
                    <filter x='-9.0%' y='-6.4%' width='117.9%' height='117.9%' filterUnits='objectBoundingBox' id='filter-2'>
                        <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
                        <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur>
                        <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.223335598 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix>
                    </filter>
                </defs>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g id='iPhone-8-Copy-2' transform='translate(-314.000000, -39.000000)'>
                        <g id='Confirm' transform='translate(316.000000, 40.000000)'>
                            <g id='Oval-2'>
                                <use fill='black' fillOpacity='1' filter='url(#filter-2)' xlinkHref='#path-1'></use>
                                <use fill='#9B1B51' fillRule='evenodd' xlinkHref='#path-1'></use>
                            </g>
                            <text id='i' fontFamily='AmericanTypewriter-Bold, American Typewriter' fontSize='29' fontWeight='bold' letterSpacing='-0.223076925' fill='#FFDFEC'>
                                <tspan x='15' y='30'>i</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
          </div>

          <SvgCharacter />

          <h1 className='win_lose_greeting'>{win ? `Welkom ${name}` : `Het spijt ons`}</h1>

          <div className='win_lose_text_div'>
            {
              win ? (
                <div>
                  <p>{name} is zonder problemen op de digitale wereld gebracht,</p>
                  <p>maar niet iedereen heeft zoveel succes.</p>
                  <p>Vanaf 30 jaar vermindert de kans op zwangerschap,</p>
                  <p>dus wacht niet te lang. <span>Leer meer hierover.</span></p>
                </div>
              ) : (
                <div>
                  <p>{name} is niet op de wereld gezet… Je deed er iets te lang over.</p>
                  <p>Gelukkig is dit een spel en krijg je hier een tweede kans.</p>
                  <p>In het echte leven is dit niet zo!</p>
                  <p>Vanaf 30 jaar verkleint de kans op zwangerschap. <span className='win_lose_info_link'>Leer meer.</span></p>
                </div>
              )
            }

            <p className='win_lose_second_par'>
              {win ? `Speel het spel of deel je baby en maak kans op een gratis drankje.` : `Probeer opnieuw en maak kans op een gratis drankje.`}
            </p>

          </div>

          {
            win ? (
              <button className={isMobile ? `general_btn_layout mobile_btn_pos` : `general_btn_layout pc_btn_pos`} onClick={handlePlay}>speel</button>
            ) : <Restart />
          }

        </div>

      ) : <Partners />
    ) : <Info />
  );
};

Win.propTypes = {
  name: string.isRequired,
  play: bool.isRequired,
  setPlay: func.isRequired,
  backToInfo: func.isRequired,
  setPartnerPage: func.isRequired,
  win: bool.isRequired,
  info: bool.isRequired,
  setInfo: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      name: store.name,
      play: store.play,
      setPlay: store.setPlay,
      backToInfo: store.backToInfo,
      setPartnerPage: store.setPartnerPage,
      info: store.info,
      setInfo: store.setInfo
    });
  }
 )(
   observer(Win)
 );
