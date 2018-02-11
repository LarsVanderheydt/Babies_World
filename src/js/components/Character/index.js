/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject} from 'mobx-react';
import {string, func, object, bool} from 'prop-types';

import SvgCharacter from './SvgCharacter';

import Previews from './Previews';
import Colors from './Colors';
import Name from '../Name';

const Character = ({selectType, setType, previewTypes, place, chooseCharacter, setCharacterView, setPlace}) => {
  document.body.style.backgroundColor = `#FFDFEC`;

  let $progress;

  setInterval(() => {
    if ($progress) {
      let decrement = 60;
      decrement -= time;
      $progress.value = decrement;
    }
  }, 1000);

  const handleIconClick = e => {
    selectType = e.currentTarget.id;
    setType(selectType);
  };

  const handleCharacterFinish = () => {
    setPlace(place);
    setCharacterView(false);
  };

  return (
      chooseCharacter ? (
        <div className='main_div'>
          <svg className='character_finish_btn' width='43px' height='43px' viewBox='0 0 43 43' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={handleCharacterFinish}>
              <defs>
                  <circle id='path-1' cx='19.5' cy='19.5' r='19.5'></circle>
                  <filter x='-9.0%' y='-6.4%' width='117.9%' height='117.9%' filterUnits='objectBoundingBox' id='filter-2'>
                      <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
                      <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur>
                      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.223335598 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix>
                  </filter>
              </defs>
              <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='Skin-Tone' transform='translate(-314.000000, -39.000000)'>
                      <g id='Confirm' transform='translate(316.000000, 40.000000)'>
                          <g id='Oval-2'>
                              <use fill='black' fillOpacity='1' filter='url(#filter-2)' xlinkHref='#path-1'></use>
                              <use fill='#9B1B51' fillRule='evenodd' xlinkHref='#path-1'></use>
                          </g>
                          <path d='M8,20.7371097 C8.1156875,20.4780036 8.19096875,20.1895728 8.354375,19.9649831 C8.95573438,19.1383694 9.79803125,18.8687869 10.7862969,19.0221458 C11.3805313,19.1142828 11.8566406,19.424602 12.2526406,19.872051 C13.50875,21.2912879 14.7692656,22.7066429 16.0464219,24.1441668 C16.109,24.0732634 16.1650625,24.0135849 16.2169063,23.9504453 C20.0530625,19.2795214 23.8883281,14.6078491 27.7251875,9.93748635 C28.6415937,8.82202089 30.2360469,8.68334771 31.3324531,9.62169504 C31.7021094,9.9380476 31.886375,10.3614568 32,10.8218611 L32,11.2895615 C31.8894219,11.879472 31.5213594,12.3197651 31.1547031,12.7661384 C26.2294531,18.7621512 21.30725,24.7606427 16.3839688,30.7582924 C16.3304844,30.8234431 16.2734375,30.885694 16.173875,31 C16.1269062,30.9267581 16.0966719,30.8627299 16.0515313,30.8118441 C13.5660312,28.0118153 11.0803438,25.2119736 8.59128125,22.4150784 C8.30079687,22.0887171 8.11315625,21.7148374 8,21.2983502 L8,20.7371097 Z' id='Fill-1' fill='#FFDFEC'></path>
                      </g>
                  </g>
              </g>
          </svg>

          <SvgCharacter page='' />


          <div className='color_div'>
            {
              selectType === `SkinTone` ||
              selectType === `Body` ? `` : (
                <Colors />
              )
            }
          </div>

          <progress value='100' max='60' className='progress_bar' ref={$el => $progress = $el}></progress>

          <div className='icons_div'>
            {
              previewTypes.map(icon => {
                // return <img key={icon.type} src={`./assets/img/Icons/${icon.type}.png`} width='35' height='35' onClick={handleIconClick} id={icon.type} className={selectType === icon.type ? `currentIcon` : `icon`} alt={icon.type} />;
                return <img key={icon.type} src={`https://babiesworld.herokuapp.com/assets/img/Icons/${icon.type}.png`} width='35' height='35' onClick={handleIconClick} id={icon.type} className={selectType === icon.type ? `currentIcon` : `icon`} alt={icon.type} />;
              })
            }
          </div>

          <Previews />

        </div>
      ) : <Name />
  );
};

Character.propTypes = {
  selectType: string.isRequired,
  setType: func.isRequired,
  previewTypes: object.isRequired,
  place: string.isRequired,
  chooseCharacter: bool.isRequired,
  setCharacterView: func.isRequired,
  setPlace: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      selectType: store.selectType,
      setType: store.setType,
      previewTypes: store.previewTypes,
      chooseCharacter: store.chooseCharacter,
      setCharacterView: store.setCharacterView,
      character: store.character,
      setPlace: store.setPlace
    });
  }
 )(
   observer(Character)
 );
