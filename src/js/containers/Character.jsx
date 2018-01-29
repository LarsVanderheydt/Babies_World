import React from 'react';
import {observer, inject} from 'mobx-react';
import {string, func, object} from 'prop-types';
import {Link} from 'react-router-dom';

import Head from '../components/Head';
import Body from '../components/Body';
import Legs from '../components/Legs';

import Previews from '../components/Previews';
import Colors from '../components/Colors';
import SupermanCape from '../components/SupermanCape';

const Character = ({selectType, setType, previewTypes, character, place}) => {

  const handleIconClick = e => {
    selectType = e.currentTarget.id;
    setType(selectType);
  };

  return (
    <div className='main_div'>
      <svg width='200px' height='330px' viewBox='0 0 200 330' version='1.1' xmlns='http://www.w3.org/2000/svg'>

        <defs>
            <polygon id='legs-evil-1' points='0.202469892 0.0946553588 31.880986 0.0946553588 31.880986 23.6522455 0.202469892 23.6522455'></polygon>
            <polygon id='legs-evil-2' points='0.0499817204 0.0946553588 31.7284978 0.0946553588 31.7284978 23.6522455 0.0499817204 23.6522455'></polygon>
            <path id='body-evil-1' d='M36.2041505,0.231884759 C36.2041505,0.231884759 -0.0915483871,44.0581043 0.370817204,60.7538069 C0.833182796,77.4495096 20.2525376,73.7393535 22.102,61.2175765 C23.9514624,48.6957995 42.6259462,2.8085882 42.6259462,2.8085882 L36.2041505,0.231884759 Z'></path>
            <path id='body-evil-2' d='M7.07534946,0.231884759 C7.07534946,0.231884759 43.3710484,44.0581043 42.9086828,60.7538069 C42.4463172,77.4495096 23.0269624,73.7393535 21.1775,61.2175765 C19.3280376,48.6957995 0.653091398,2.8085882 0.653091398,2.8085882 L7.07534946,0.231884759 Z'></path>
            <polygon id='hair-unicorn-1' points='0.140155556 0.247408537 16.6679333 0.247408537 16.6679333 75 0.140155556 75'></polygon>
            <path id='body-unicorn-1' d='M10.6656386,0.467294118 C10.6656386,0.467294118 -7.1893253,64.0625882 3.33209639,81.1185882 C3.33209639,81.1185882 25.7745301,95.1788235 72.9306988,83.1035294 C82.0877831,57.56 66.6378072,0.205176471 66.6378072,0.205176471 L10.6656386,0.467294118 Z'></path>
        </defs>

        {
          character.bodyType === `Superman` ? <SupermanCape /> : ``
        }

        {
          character.bodyType === `Unicorn` ? (
            <g>
              <Legs />
              <Body />
              <Head />
            </g>
          ) : (
            <g>
              <Body />
              <Legs />
              <Head />
            </g>
          )
        }

      </svg>

      <div className='color_div'>
        {
          selectType === `Hair` ? <Colors /> : ``
        }
      </div>


      <div className='icons_div' >
        {
          previewTypes.map(icon => {
            return <img key={icon.type} src={`./assets/img/Icons/${icon.type}.png`} width='60' height='40' onClick={handleIconClick} id={icon.type} />;
          })
        }
      </div>

      <Previews />

      <Link to={`/place/${place}`}>Ga Verder</Link>

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
