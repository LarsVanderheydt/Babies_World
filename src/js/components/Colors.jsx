import React from 'react';
import {func, object} from 'prop-types';
import {inject, observer} from 'mobx-react';

const Colors = ({setCharacter, character, colors}) => {
  let id = 0;
  const onColorClick = e => {
    const color = e.currentTarget.id;

    if (character.hair === `Unicorn`) {
      const index = colors[character.hair].primary.indexOf(color);
      const secondary = colors[character.hair].secondary[index];
      const tertiary = colors[character.hair].tertiary[index];

      character.hairColor[character.hair].primary = color;
      character.hairColor[character.hair].secondary = secondary;
      character.hairColor[character.hair].tertiary = tertiary;
    } else {
      character.hairColor[character.hair] = color;
    }

    console.log(character.hairColor[character.hair]);
    setCharacter(character);
  };

  return (
    <div>
      {
        character.hair ? (
          colors[character.hair].primary.map(color => {
            id ++;
            return (<div key={id} style={{
              backgroundColor: color,
              width: `3rem`,
              height: `3rem`,
              borderRadius: `5rem`
            }}
            onClick={onColorClick} id={color}></div>);
          })
        ) : ``

      }
    </div>
  );
};

Colors.propTypes = {
  setCharacter: func.isRequired,
  character: object.isRequired,
  colors: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setCharacter: store.setCharacter,
      character: store.character,
      colors: store.colors
    });
  }
 )(
   observer(Colors)
 );
