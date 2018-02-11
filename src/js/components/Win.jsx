import React from 'react';
import {string, bool, func} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Confetti from 'react-confetti';

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

  const body = document.body,
    html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

  return (
    !info ? (
      !play ? (
        <div className='win_lose_screen'>

          {
            win ? (
              <div style={{zIndex: `-999`, position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`, overflow: `hidden`}}>
                <Confetti width={width} height={height * 2} recycle={false} />
              </div>
            ) : ``
          }

          <SvgCharacter page='' />

          <h1 className='win_lose_greeting'>{win ? `Welkom ${name}` : `Het spijt ons`}</h1>

          <div className='win_lose_text_div'>
            {
              win ? (
                <div>
                  <p>{name} is <span className='bold'>zonder problemen</span> op de digitale wereld gebracht,</p>
                  <p>maar niet iedereen heeft zoveel succes.</p>
                  <p>Vanaf 30 jaar vermindert de kans op zwangerschap,</p>
                  <p><span className='bold'>dus wacht niet te lang.</span> <span className='win_lose_info_link'>Leer meer hierover.</span></p>
                </div>
              ) : (
                <div>
                  <p>{name} is niet op de wereld gezet… Je deed er iets te lang over.</p>
                  <p>Gelukkig is dit een spel en krijg je hier een <span className='bold'>tweede kans.</span></p>
                  <p>In het echte leven is dit niet zo!</p>
                  <p><span className='bold'>Vanaf 30 jaar verkleint de kans op zwangerschap.</span><span className='win_lose_info_link'>Leer meer.</span></p>
                </div>
              )
            }

            <p className='win_lose_second_par bold'>
              {win ? `Deel je baby en maak kans op een gratis drankje.` : `Probeer opnieuw en maak kans op een gratis drankje.`}
            </p>

          </div>

          <div className={win ? `win_lose_btns_div` : `win_lose_btns_div win_lose_btn_center`}>
            <svg className='win_lose_info' width='43px' height='43px' viewBox='0 0 43 43' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={onInfoClick}>
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
                            <text id='i' fontFamily='AmericanTypewriter-Bold, American Typewriter' fontSize='29' fontWeight='bold' letterSpacing='-0.223076925' fill='rgb(255, 255, 255)'>
                                <tspan x='15' y='30'>i</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>


          {
            win ? (
              <div className='play_btn_div' onClick={handlePlay}>
                <button className={isMobile ? `mobile_btn_pos play_btn` : `pc_btn_pos play_btn`}>speel</button>

                <svg width='12px' height='19px' viewBox='0 0 12 19' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                        <g id='iPhone-8-Copy-3' transform='translate(-19.000000, -97.000000)' fill='#9B1B51'>
                            <g id='Icons/iMessage/Back' transform='translate(24.884615, 106.615385) rotate(-270.000000) translate(-24.884615, -106.615385) translate(15.884615, 101.115385)'>
                                <g id='Back-button'>
                                    <polygon transform='translate(8.884615, 5.288462) rotate(90.000000) translate(-8.884615, -5.288462) ' points='3.59615385 5.28846154 12.4807692 -3.59615385 14.1730769 -1.90384615 6.98076923 5.28846154 14.1730769 12.4807692 12.4807692 14.1730769'></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
              </div>
            ) : <Restart page='win' />
          }
        </div>

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
