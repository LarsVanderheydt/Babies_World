import React from 'react';
import {func, object, string} from 'prop-types';
import {inject, observer} from 'mobx-react';

const HairPreviews = ({setCharacter, selectType, previewTypes}) => {

  const setImgs = () => {
    const imgs = [];

    previewTypes.map(preview => {
      if (preview.type === selectType) {
        preview.types.map(d => {
          imgs.push(<img key={d} src={`./assets/img/${preview.type}/${d}.png`} onClick={handleHeadClick} id={d} />);
        });
      }
    });

    return imgs;
  };

  const handleHeadClick = e => {
    const type = e.currentTarget.id;

    setCharacter(selectType, type);
  };

  return (
    <div className='previews'>
      {
        setImgs().map(img => img)
      }
    </div>
  );
};

HairPreviews.propTypes = {
  setCharacter: func.isRequired,
  selectType: string.isRequired,
  previewTypes: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setCharacter: store.setCharacter,
      previewTypes: store.previewTypes,
      selectType: store.selectType
    });
  }
)(
   observer(HairPreviews)
 );
