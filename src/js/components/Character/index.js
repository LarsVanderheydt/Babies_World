/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {observer, inject} from 'mobx-react';
import {string, func, object, bool} from 'prop-types';

import SvgCharacter from './SvgCharacter';

import Previews from './Previews';
import Colors from './Colors';
import Name from '../Name';

const Character = ({selectType, setType, previewTypes, place, chooseCharacter, setCharacterView}) => {

  const handleIconClick = e => {
    console.log(place);
    selectType = e.currentTarget.id;
    setType(selectType);
  };

  const handleCharacterFinish = () => {
    setCharacterView(false);
  };

  return (
      chooseCharacter ? (
        <div className='main_div'>

          <div>
            <button onClick={handleCharacterFinish}>Ga verder</button>
          </div>

          <SvgCharacter />

          <div className='color_div'>
            {selectType === `SkinTone` || selectType === `Body` || selectType === `Accessoire` ? `` : <Colors />}
          </div>

          <div className='icons_div'>
            {
              previewTypes.map(icon => {
                return <img key={icon.type} src={`https://babiesworld.herokuapp.com/assets/img/Icons/${icon.type}.png`} width='35' height='35' onClick={handleIconClick} id={icon.type} className={selectType === icon.type ? `currentIcon` : `icon`} />;
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
  setCharacterView: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      selectType: store.selectType,
      setType: store.setType,
      previewTypes: store.previewTypes,
      chooseCharacter: store.chooseCharacter,
      setCharacterView: store.setCharacterView
    });
  }
 )(
   observer(Character)
 );
