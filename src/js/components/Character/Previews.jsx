import React from 'react';
import {func, object, string} from 'prop-types';
import {inject, observer} from 'mobx-react';

const HairPreviews = ({setCharacter, selectType, previewTypes, character, selectedType}) => {
  const iconNameToCharacterName = selectedType(selectType);
  const handlePreviewClick = e => {
    const type = e.currentTarget.id;
    setCharacter(selectType, type);
  };

  const setImgs = () => {
    const imgs = [];

    previewTypes.map(preview => {
      if (selectType === `SkinTone`) {
        if (preview.type === selectType) {
          preview.types.map(color => {
            imgs.push(
              <div key={color} className={character.bodyTypeColor.color === color ? `skinTone_div current_skintone` : `skinTone_div`}>
                <div className='skinTone_head' style={{backgroundColor: color}}>
                  {/* <img  src={`./assets/img/SkinTone/eyes.png`} onClick={handlePreviewClick} id={color} width='30' height='10' /> */}
                  <img  src={`https://babiesworld.herokuapp.com/assets/img/SkinTone/eyes.png`} onClick={handlePreviewClick} id={color} width='30' height='10' />
                </div>
              </div>
            );
          });
        }
      } else {
        if (preview.type === selectType) {
          preview.types.map(d => {
            imgs.push(
              <div key={d} className={character[iconNameToCharacterName] === d ? `skinTone_div current_skintone` : `skinTone_div`}>
                {/* <img src={`./assets/img/${preview.type}/${d}.png`} onClick={handlePreviewClick} id={d} width='100' height='50' /> */}
                <img src={`https://babiesworld.herokuapp.com/${preview.type}/${d}.png`} onClick={handlePreviewClick} id={d} width='100' height='50' />
              </div>
            );
          });
        }
      }
    });

    return imgs;
  };

  return (
    <div className='previews'>
      <div className='preview_imgs'>
        {
          setImgs().map(img => img)
        }
      </div>
    </div>
  );
};

HairPreviews.propTypes = {
  setCharacter: func.isRequired,
  selectType: string.isRequired,
  previewTypes: object.isRequired,
  character: object.isRequired,
  selectedType: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setCharacter: store.setCharacter,
      previewTypes: store.previewTypes,
      selectType: store.selectType,
      character: store.character,
      selectedType: store.selectedType
    });
  }
)(
   observer(HairPreviews)
 );
