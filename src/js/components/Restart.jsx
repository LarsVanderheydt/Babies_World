import React from 'react';
import {func, string} from 'prop-types';
import {inject, observer} from 'mobx-react';

const character = {
  eyesColor: {Default: `#C1272D`, Angry: `#560909`, Sunglasses: `#FFFF00`, Blush: `#C1272D`, Chinese: `#42210B`, Glasses: `#FFFF00`},
  facialHairColor: {Pacifier: `#7F47DD`, HeartPacifier: `#AA242E`, Goatie: `#C1272D`, Mouse: `#CCCCCC`},
  hairColor: {
    Default: `#DB917D`,
    Bride: `#42210B`,
    Curly: `#42210B`,
    Mohawk: `#C1272D`,
    Trump: {primary: `#FFD63F`, secondary: `#E8BF3D`},
    Unicorn: {primary: `#93278F`, secondary: `#842484`, tertiary: `#E39AE5`}
  },
  legsColor: {Default: ``, Superman: `#C1272D`, Classy: `#7F47DD`, DaiperBoots: ``, Daiper: ``, Mermaid: ``},
  accessoireColor: {Balloon: `#C60505`, Nutella: `#42210B`, Cape: `#C1272D`, Wings: ``},
  bodyTypeColor: {color: `#FBEFEF`},

  hair: `Default`,
  eyes: `Default`,
  facialHair: `Default`,
  bodyType: `Default`,
  legs: `Default`,
  accessoire: `Default`,
  partner: `Unicorn`
};

const HandleRestart = ({setPlay, backToInfo, setPartnerPage, setCharacterView, setCharacter, setWinner, place, page}) => {

  const handleRestart = () => {
    setPlay(false);
    backToInfo(false);
    setPartnerPage(false);
    setCharacterView(true);
    setCharacter(character);
    setWinner(0);
    time = 0;
    socket.emit(`setCharacter`, {character, place});
    socket.emit(`playing`, false);
  };

  return (
    page === `controller` ? (
      <button className={isMobile ? `controller_restart_btn mobile_btn_pos` : `controller_restart_btn pc_btn_pos`} onClick={handleRestart}>begin opnieuw</button>
    ) : (
      <button className={isMobile ? `win_lose_btn mobile_btn_pos` : `win_lose_btn pc_btn_pos`} onClick={handleRestart}>begin opnieuw</button>
    )
  );
};

HandleRestart.propTypes = {
  setPlay: func.isRequired,
  backToInfo: func.isRequired,
  setPartnerPage: func.isRequired,
  setCharacterView: func.isRequired,
  setCharacter: func.isRequired,
  setWinner: func.isRequired,
  place: string.isRequired,
  page: string.isRequired
};

export default inject(
  ({store}) => {
    return ({
      setPlay: store.setPlay,
      backToInfo: store.backToInfo,
      setPartnerPage: store.setPartnerPage,
      setCharacterView: store.setCharacterView,
      setCharacter: store.setCharacter,
      setWinner: store.setWinner,
      place: store.place
    });
  }
 )(
   observer(HandleRestart)
 );
