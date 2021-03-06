/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {object} from 'prop-types';

import Head from './Head';
import Body from './Body';
import Legs from './Legs';
import Accessoires from './Accessoires';
import Partner from './Partner';

const ControllerCharacter = ({character}) => {

  return (
    <svg width='180px' height='130px' viewBox={character.partner === `Stork` ? `0 0 350 360` : character.partner === `Cloud` ? `0 -30 200 330` : `0 0 100 360`} version='1.1' xmlns='http://www.w3.org/2000/svg' className='svg_character_controller'>
      <defs>
          <polygon id='legs-evil-1' points='0.202469892 0.0946553588 31.880986 0.0946553588 31.880986 23.6522455 0.202469892 23.6522455'></polygon>
          <polygon id='legs-evil-2' points='0.0499817204 0.0946553588 31.7284978 0.0946553588 31.7284978 23.6522455 0.0499817204 23.6522455'></polygon>
          <path id='body-evil-1' d='M36.2041505,0.231884759 C36.2041505,0.231884759 -0.0915483871,44.0581043 0.370817204,60.7538069 C0.833182796,77.4495096 20.2525376,73.7393535 22.102,61.2175765 C23.9514624,48.6957995 42.6259462,2.8085882 42.6259462,2.8085882 L36.2041505,0.231884759 Z'></path>
          <path id='body-evil-2' d='M7.07534946,0.231884759 C7.07534946,0.231884759 43.3710484,44.0581043 42.9086828,60.7538069 C42.4463172,77.4495096 23.0269624,73.7393535 21.1775,61.2175765 C19.3280376,48.6957995 0.653091398,2.8085882 0.653091398,2.8085882 L7.07534946,0.231884759 Z'></path>
          <polygon id='hair-unicorn-1' points='0.140155556 0.247408537 16.6679333 0.247408537 16.6679333 75 0.140155556 75'></polygon>
          <path id='body-unicorn-1' d='M10.6656386,0.467294118 C10.6656386,0.467294118 -7.1893253,64.0625882 3.33209639,81.1185882 C3.33209639,81.1185882 25.7745301,95.1788235 72.9306988,83.1035294 C82.0877831,57.56 66.6378072,0.205176471 66.6378072,0.205176471 L10.6656386,0.467294118 Z'></path>
          <path id='hair-trump-1' d='M25.3670088,4.14923077 C10.8733684,8.06538462 -0.279877193,13.4123077 0.454684211,16.0915385 C1.18924561,18.7707692 13.5335965,17.7673846 28.0272368,13.8512308 C42.5208772,9.93461538 53.6745877,4.58769231 52.9395614,1.90846154 C52.6615439,0.894 50.7177456,0.407538462 47.6218947,0.407538462 C42.5450526,0.407538462 34.3705,1.716 25.3670088,4.14923077 Z'></path>
          <path id='hair-trump-2' d='M25.3670088,4.14923077 C10.8733684,8.06538462 -0.279877193,13.4123077 0.454684211,16.0915385 C1.18924561,18.7707692 13.5335965,17.7673846 28.0272368,13.8512308 C42.5208772,9.93461538 53.6745877,4.58769231 52.9395614,1.90846154 C52.6615439,0.894 50.7177456,0.407538462 47.6218947,0.407538462 C42.5450526,0.407538462 34.3705,1.716 25.3670088,4.14923077'></path>
          <polygon id='hair-trump-3' points='0 0.0678461538 12.7879018 0.0678461538 12.7879018 18.1726154 0 18.1726154'></polygon>
          <polygon id='body-suit-1' points='0.0705789474 0.166511628 22.464 39.9618605 44.8578947 0.166511628'></polygon>
          <path id='eyes-chinese-1' d='M3.8475,5.5888 C1.584125,7.784 0.662625,10.1724 0.56525,10.4356 C0.168625,11.5108 0.58425,12.7512 1.4915,13.2272 C1.729,13.3504 1.973625,13.4064 2.21825,13.4064 C2.909375,13.4064 3.569625,12.936 3.87125,12.1492 C3.9805,11.8636 6.65475,5.1604 14.801,6.398 C15.79375,6.5492 16.698625,5.726 16.8245,4.5584 C16.95275,3.3936 16.24975,2.324 15.264125,2.1728 C14.413875,2.044 13.60875,1.9852 12.84875,1.9852 C8.54525,1.9852 5.624,3.8612 3.8475,5.5888 Z'></path>
          <path id='wings-chinese-2' d='M3.49125,2.1728 C2.500875,2.324 1.802625,3.3936 1.930875,4.5584 C2.05675,5.726 2.964,6.5492 3.952,6.398 C12.086375,5.1576 14.763,11.8356 14.88175,12.1464 C15.178625,12.9416 15.838875,13.4176 16.53475,13.4176 C16.774625,13.4176 17.016875,13.3588 17.254375,13.2412 C18.166375,12.7708 18.589125,11.5108 18.18775,10.4384 C18.090375,10.1724 17.17125,7.7812 14.91025,5.5888 C13.129,3.864 10.203,1.9852 5.901875,1.9852 C5.141875,1.9852 4.339125,2.044 3.49125,2.1728 Z'></path>
          <path id='eyes-wings-3' d='M1.0008,1.61 C1.0008,2.4975 3.2496,3.22 6.0192,3.22 C8.7936,3.22 11.0424,2.4975 11.0424,1.61 C11.0424,0.72 8.7936,0 6.0192,0 C3.2496,0 1.0008,0.72 1.0008,1.61 Z'></path>
          <path id='eyes-wings-4' d='M0.9552,1.61 C0.9552,2.4975 3.204,3.22 5.9784,3.22 C8.748,3.22 10.9968,2.4975 10.9968,1.61 C10.9968,0.72 8.748,0 5.9784,0 C3.204,0 0.9552,0.72 0.9552,1.61 Z'></path>
          <polygon id='accessoires-wings-1' points='0.000189354343 0.0567846401 102.842672 0.0567846401 102.842672 104.907216 0.000189354343 104.907216'></polygon>
          <polygon id='accessoires-wings-2' points='0.442007011 0.0567846401 104.800596 0.0567846401 104.800596 104.907216 0.442007011 104.907216'></polygon>
      </defs>

      <g transform={character.partner === `Unicorn` ? `scale(0.5 0.5) translate(10, 0)` : character.partner === `Stork` ? `scale(0.5 0.5) translate(600, 40) rotate(30)` : `scale(0.5 0.5) translate(50, -80)`}>
        {character.accessoire === `Cape` ? <Accessoires character={character} /> : ``}
        {character.accessoire === `Wings` ? <Accessoires character={character} /> : ``}
      </g>

      {
        character.partner === `Unicorn` || character.partner === `Cloud` ? (
          <Partner partner={character.partner} />
        ) : (
          character.partner === `Stork` ? (
            <g transform='translate(0, 60)'>
              <path d='M273.358333,11 C273.358333,11 277.452381,102.750277 296,112.669811 L266.595238,128 L258,71.1881243 C258,71.1881243 268.811905,16.6415094 273.358333,11' id='Fill-14' fill='#B4BCAF'></path>
            </g>
          ) : ``
        )
      }

      <g transform={character.partner === `Unicorn` ? `scale(0.5 0.5) translate(10, 0)` : character.partner === `Stork` ? `scale(0.5 0.5) translate(600, 40) rotate(30)` : `scale(0.5 0.5) translate(50, -80)`}>
        {character.accessoire === `Cape` ? <Accessoires character={character} /> : ``}
        {character.accessoire === `Wings` ? <Accessoires character={character} /> : ``}

        {
          character.bodyType === `KaaDrie` || character.bodyType === `Bride` ? (
            <g>
              <Legs character={character} />
              <Body character={character} />
            </g>
          ) : (
            <g>
              <Body character={character} />
              <Legs character={character} />
            </g>
          )
        }

        <Head character={character} />

        {
          character.accessoire === `Default` ||
          character.accessoire === `Cape` ||
          character.accessoire === `Wings`
          ? `` : <Accessoires character={character} />
        }
      </g>

      {
        character.partner === `Stork` ? (
          <Partner partner={character.partner} />
        ) : ``
      }

    </svg>
  );
};

ControllerCharacter.propTypes = {
  character: object.isRequired
};

export default ControllerCharacter;
