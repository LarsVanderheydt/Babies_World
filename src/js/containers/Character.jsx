import React from 'react';
import {observer, inject} from 'mobx-react';
import {string, func, object} from 'prop-types';
// import {Link} from 'react-router-dom';
import io from 'socket.io-client';
import Head from '../components/Head';
import Body from '../components/Body';
import Legs from '../components/Legs';
import Accessoires from '../components/Accessoires';

import Previews from '../components/Previews';
import Colors from '../components/Colors';
import SupermanCape from '../components/SupermanCape';

const Character = ({selectType, setType, previewTypes, character, place}) => {

  const handleIconClick = e => {
    console.log(place);
    selectType = e.currentTarget.id;
    setType(selectType);
  };

  const socket = io.connect(`http://localhost:8000`);

  // let connectionUrlEl;

  const init = () => {
    connect();
  };

  const connect = () => {
    socket.on(`sid`, sid => {
      // connectionUrlEl.textContent = `controller/${sid}`;
      console.log(sid);
    });
  };

  init();

  return (
    <div className='main_div'>
      {/* <p ref={$el => connectionUrlEl = $el}></p>
      <div className='next'>
        <Link to={`/controller/${place}`} >Ga verder</Link>

      </div> */}
      <svg width='330px' height='330px' viewBox='0 0 200 330' version='1.1' xmlns='http://www.w3.org/2000/svg' className='svg_character'>
        <defs>
            <polygon id='legs-evil-1' points='0.202469892 0.0946553588 31.880986 0.0946553588 31.880986 23.6522455 0.202469892 23.6522455'></polygon>
            <polygon id='legs-evil-2' points='0.0499817204 0.0946553588 31.7284978 0.0946553588 31.7284978 23.6522455 0.0499817204 23.6522455'></polygon>
            <path id='body-evil-1' d='M36.2041505,0.231884759 C36.2041505,0.231884759 -0.0915483871,44.0581043 0.370817204,60.7538069 C0.833182796,77.4495096 20.2525376,73.7393535 22.102,61.2175765 C23.9514624,48.6957995 42.6259462,2.8085882 42.6259462,2.8085882 L36.2041505,0.231884759 Z'></path>
            <path id='body-evil-2' d='M7.07534946,0.231884759 C7.07534946,0.231884759 43.3710484,44.0581043 42.9086828,60.7538069 C42.4463172,77.4495096 23.0269624,73.7393535 21.1775,61.2175765 C19.3280376,48.6957995 0.653091398,2.8085882 0.653091398,2.8085882 L7.07534946,0.231884759 Z'></path>
            <polygon id='hair-unicorn-1' points='0.140155556 0.247408537 16.6679333 0.247408537 16.6679333 75 0.140155556 75'></polygon>
            <path id='body-unicorn-1' d='M10.6656386,0.467294118 C10.6656386,0.467294118 -7.1893253,64.0625882 3.33209639,81.1185882 C3.33209639,81.1185882 25.7745301,95.1788235 72.9306988,83.1035294 C82.0877831,57.56 66.6378072,0.205176471 66.6378072,0.205176471 L10.6656386,0.467294118 Z'></path>
            <path id='hair-trump-1' d='M25.3670088,4.14923077 C10.8733684,8.06538462 -0.279877193,13.4123077 0.454684211,16.0915385 C1.18924561,18.7707692 13.5335965,17.7673846 28.0272368,13.8512308 C42.5208772,9.93461538 53.6745877,4.58769231 52.9395614,1.90846154 C52.6615439,0.894 50.7177456,0.407538462 47.6218947,0.407538462 C42.5450526,0.407538462 34.3705,1.716 25.3670088,4.14923077 Z'></path>
            <path id='hair-trump-2' d='M25.3670088,4.14923077 C10.8733684,8.06538462 -0.279877193,13.4123077 0.454684211,16.0915385 C1.18924561,18.7707692 13.5335965,17.7673846 28.0272368,13.8512308 C42.5208772,9.93461538 53.6745877,4.58769231 52.9395614,1.90846154 C52.6615439,0.894 50.7177456,0.407538462 47.6218947,0.407538462 C42.5450526,0.407538462 34.3705,1.716 25.3670088,4.14923077'></path>
            <polygon id='hair-trump-3' points='0 0.0678461538 12.7879018 0.0678461538 12.7879018 18.1726154 0 18.1726154'></polygon>
            <polygon id='body-suit-1' points='0.0705789474 0.166511628 22.464 39.9618605 44.8578947 0.166511628'></polygon>
        </defs>
        <ellipse className='Pink-oval' cx='100' cy='320' rx='87.5' ry='10' fill='#9B1B51'></ellipse>
        <circle id='Pink-oval' cx='100' cy='142.5' r='105.5' fill='#9B1B51'></circle>

        {character.bodyType === `Superman` ? <SupermanCape /> : ``}

        {
          character.bodyType === `Unicorn` || character.bodyType === `Bride` ? (
            <g>
              <Legs />
              <Body />
              <Head />
              <Accessoires />
            </g>
          ) : (
            <g>
              <Body />
              <Legs />
              <Head />
              <Accessoires />
            </g>
          )
        }

      </svg>

      <div className='color_div'>
        {selectType === `SkinTone` || selectType === `Body` || selectType === `Accessoires` ? `` : <Colors />}
      </div>

      <div className='icons_div' >
        {
          previewTypes.map(icon => {
            return <img key={icon.type} src={`./assets/img/Icons/${icon.type}.png`} width='35' height='35' onClick={handleIconClick} id={icon.type} className={selectType === icon.type ? `currentIcon` : `icon`} />;
          })
        }
      </div>

      <Previews />

    </div>
  );
};

Character.propTypes = {
  selectType: string.isRequired,
  setType: func.isRequired,
  previewTypes: object.isRequired,
  character: object.isRequired,
  place: string.isRequired
};

export default inject(
  ({store}) => {
    return ({
      selectType: store.selectType,
      setType: store.setType,
      previewTypes: store.previewTypes,
      character: store.character
    });
  }
 )(
   observer(Character)
 );
