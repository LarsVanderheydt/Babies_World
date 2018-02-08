import React from 'react';
import {bool, func, object, number} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Controller from './Controller';
import Win from './Win';

import SvgPartner from './Partner';

const Partners = ({choosingPartner, setPartnerPage, backToInfo, infoPage, setPlay, character, partner}) => {

  const handleNextClick = () => {
    setPartnerPage(false);

    socket.emit(`setCharacter`, character);
  };

  const handleBackClick = () => {
    setPlay(false);
    backToInfo(true);
  };


  return (
    !infoPage ? (
      choosingPartner ? (
        <div className='vehicle_page'>

          <svg className='back_btn' width='13px' height='21px' viewBox='0 0 13 21' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={handleBackClick}>
            <polygon transform='translate(-4.000000, 4.000000)' fill='#901947' points='4.25 6.25 14.75 -4.25 16.75 -2.25 8.25 6.25 16.75 14.75 14.75 16.75'></polygon>
          </svg>

          <div className='partners_div'>
            <SvgPartner />
          </div>

          <div className='vehicle_text'>
            <h1 className='vehicle_name'>
              {
                (() => {
                  let pName = ``;

                  switch (partner) {
                  case 0:
                    pName = `Unicorn`;
                    break;
                  case 1:
                    pName = `Ooievaar`;
                    break;

                  case 2:
                    pName = `None`;
                    break;
                  }

                  return pName;
                })()
              }
            </h1>
            <button className='general_btn_layout' onClick={handleNextClick}>verder</button>
          </div>

        </div>
      ) : <Controller setPartnerPage={setPartnerPage} />
    ) : <Win />
  );
};

Partners.propTypes = {
  choosingPartner: bool.isRequired,
  setPartnerPage: func.isRequired,
  backToInfo: func.isRequired,
  infoPage: bool.isRequired,
  setPlay: func.isRequired,
  character: object.isRequired,
  partner: number.isRequired
};

// export default Partners;

export default inject(
  ({store}) => {
    return ({
      choosingPartner: store.choosingPartner,
      setPartnerPage: store.setPartnerPage,
      setCharacterView: store.setCharacterView,
      backToInfo: store.backToInfo,
      infoPage: store.infoPage,
      setPlay: store.setPlay,
      character: store.character,
      partner: store.partner
    });
  }
)(
   observer(Partners)
);
