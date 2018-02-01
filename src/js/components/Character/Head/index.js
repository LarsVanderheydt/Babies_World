/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Hair from './Hair';
import Eyes from './Eyes';
import Facial from './Facial';

const Head = ({character}) => {

  return (
    <g id='head' transform='translate(24.000000, 9.000000)'>
        <path id='head-shape' d='M152.00014,129 C152.00014,170.973448 117.973588,205 76.0001399,205 C34.0262258,205 0.000139877301,170.973448 0.000139877301,129 C0.000139877301,87.0265521 34.0262258,53 76.0001399,53 C117.973588,53 152.00014,87.0265521 152.00014,129' fill={character.bodyTypeColor.color}></path>

        <Hair type={character.hair} />
        <Eyes type={character.eyes} />
        {character.facialHair === `Default` ? `` : <Facial type={character.facialHair} />}
    </g>
  );
};

Head.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Head)
 );
