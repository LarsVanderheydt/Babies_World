/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';

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
            return <Default />;

          case `Superman`:
            return <Superman />;

          case `DaiperBoots`:
            return <DaiperBoots color={character.bodyTypeColor.color} />;

          case `Classy`:
            return <Classy />;

          case `Daiper`:
            return <Daiper color={character.bodyTypeColor.color} />;

          case `Mermaid`:
            return <Mermaid color={character.bodyTypeColor.color} />;

          }
        })()
      }
    </g>
  );
};

Legs.propTypes = {
  character: object.isRequired
};

export default Legs;
