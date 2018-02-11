import React from 'react';
import {bool, func, object, number, string} from 'prop-types';
import {inject, observer} from 'mobx-react';

import Controller from './Controller';
import SvgPartner from './Partner';

const Partners = ({choosingPartner, setPartnerPage, backToInfo, setPlay, character, partner, place, name, setCharacter}) => {

  const handleNextClick = () => {
    setPartnerPage(false);
    setCharacter(character);
    socket.emit(`setCharacter`, {character, place, name});
  };

  const handleBackClick = () => {
    setPlay(false);
    backToInfo(true);
  };

  return (
    choosingPartner ? (
      <div className='partner_page'>
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
                  character.partner = `Unicorn`;
                  break;
                case 1:
                  pName = `Ooievaar`;
                  character.partner = `Stork`;
                  break;

                case 2:
                  pName = `Cloud`;
                  character.partner = `Cloud`;
                  break;
                }

                return pName;
              })()
            }
          </h1>
          <button className={isMobile ? `general_btn_layout mobile_btn_pos` : `general_btn_layout pc_btn_pos`} onClick={handleNextClick}>verder</button>
        </div>

      </div>
    ) : (
      <Controller setPartnerPage={setPartnerPage} place={place} />
    )
  );
};

Partners.propTypes = {
  choosingPartner: bool.isRequired,
  setPartnerPage: func.isRequired,
  backToInfo: func.isRequired,
  setPlay: func.isRequired,
  character: object.isRequired,
  setCharacter: func.isRequired,
  partner: number.isRequired,
  place: string.isRequired,
  name: string.isRequired
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
      setCharacter: store.setCharacter,
      partner: store.partner,
      place: store.place,
      name: store.name
    });
  }
)(
   observer(Partners)
);
