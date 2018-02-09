/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Superman from './Superman';
import Default from './Default';
import DaiperBoots from './DaiperBoots';
import Daiper from './Daiper';
import Classy from './Classy';
import Mermaid from './Mermaid';

const Legs = ({character}) => {

  return (
    <g id='legs'>
      {
        (() => {
          switch (character.legs) {
          case `Default`:
            return <Default color={character.legsColor.Default} />;

          case `Superman`:
            return <Superman body={character.bodyTypeColor.color} color={character.legsColor.Superman} />;

          case `DaiperBoots`:
            return <DaiperBoots body={character.bodyTypeColor.color} color={character.legsColor.DaiperBoots} />;

          case `Classy`:
            return <Classy body={character.bodyTypeColor.color} color={character.legsColor.Classy} />;

          case `Daiper`:
            return <Daiper body={character.bodyTypeColor.color} color={character.legsColor.Daiper} />;

          case `Mermaid`:
            return <Mermaid body={character.bodyTypeColor.color} color={character.legsColor.Mermaid} />;

          }
        })()
      }
    </g>
  );
};

Legs.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Legs)
 );
