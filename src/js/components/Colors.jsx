import React from 'react';
import {func, object, string} from 'prop-types';
import {inject, observer} from 'mobx-react';

const Colors = ({setCharacter, character, colors, selectType, selectedType}) => {
  let id = 0;
  const iconNameToCharacterName = selectedType(selectType);
  const characterColorName = `${iconNameToCharacterName}Color`;

  const onColorClick = e => {
    const color = e.currentTarget.id;

    if (character.hair === `Unicorn` && selectType === `Hair`) {
      const index = colors[0].Hair.Unicorn.primary.indexOf(color);
      const secondary = colors[0].Hair.Unicorn.secondary[index];
      const tertiary = colors[0].Hair.Unicorn.tertiary[index];

      character.hairColor.Unicorn.primary = color;
      character.hairColor.Unicorn.secondary = secondary;
      character.hairColor.Unicorn.tertiary = tertiary;

    } else if (character.hair === `Trump` && selectType === `Hair`) {

      const index = colors[0].Hair.Trump.primary.indexOf(color);
      const secondary = colors[0].Hair.Trump.secondary[index];

      character.hairColor.Trump.primary = color;
      character.hairColor.Trump.secondary = secondary;

    } else {
      // character.facialHair.Facial
      character[characterColorName][character[iconNameToCharacterName]] = color;
    }

    setCharacter(character);
  };

  return (
    <div>
      {
        colors[0][selectType][character[iconNameToCharacterName]].primary.map(color => {
          id ++;
          return (<div key={id} style={{
            backgroundColor: color,
            width: `3rem`,
            height: `3rem`,
            borderRadius: `5rem`
          }}
          onClick={onColorClick} id={color}></div>);
        })
      }
    </div>
  );
};

Colors.propTypes = {
  setCharacter: func.isRequired,
  character: object.isRequired,
  colors: object.isRequired,
  selectType: string.isRequired,
  selectedType: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setCharacter: store.setCharacter,
      character: store.character,
      colors: store.colors,
      selectType: store.selectType,
      selectedType: store.selectedType
    });
  }
 )(
   observer(Colors)
 );
