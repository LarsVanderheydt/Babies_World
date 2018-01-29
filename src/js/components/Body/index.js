/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {object} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Superman from './Superman';
import Evil from './Evil';
import Unicorn from './Unicorn';

const Body = ({character}) => {

  return (
    <g>
      {
        (() => {
          switch (character.bodyType) {
          case `Superman`:
            return <Superman />;

          case `Evil`:
            return <Evil />;

          case `Unicorn`:
            return <Unicorn />;

          default:

          }
        })()
      }
    </g>
  );
};

Body.propTypes = {
  character: object.isRequired
};

export default inject(
  ({store}) => {
    return ({
      character: store.character
    });
  }
 )(
   observer(Body)
 );
