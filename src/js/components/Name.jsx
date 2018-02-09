import React from 'react';
import {bool, func, number} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Character from './Character/';

import SvgCharacter from './Character/SvgCharacter';

import Win from './Win';

const Name = ({chooseName, setCharacterView, chooseCharacter, winner, setWinner, setName}) => {
  let $name;
  let $submit;
  let $svg;

  const handleCharacterBack = () => {
    setCharacterView(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    const camelCase = $name.value.charAt(0).toUpperCase() + $name.value.slice(1);
    setName(camelCase);
    if (time <= 10) {
      setWinner(1);
    } else {
      setWinner(2);
    }
  };

  const onChange = () => {
    if ($name.value) {
      $submit.classList.remove(`btn_disabled`);
      $submit.disabled = false;
    } else {
      $submit.classList.add(`btn_disabled`);
      $submit.disabled = true;
    }
  };

  const onFocus = () => {
    $svg.classList.add(`hide`);
    $submit.classList.remove(`mobile_btn_pos`);
    $submit.classList.add(`pc_btn_pos`);
  };

  const onBlur = () => {
    $svg.classList.remove(`hide`);
  };

  return (
    winner === 0 ? (
      !chooseCharacter ? (
        <div className='partner_page'>

          <svg className='back_btn' width='13px' height='21px' viewBox='0 0 13 21' version='1.1' xmlns='http://www.w3.org/2000/svg' onClick={handleCharacterBack}>
            <polygon transform='translate(-4.000000, 4.000000)' fill='#901947' points='4.25 6.25 14.75 -4.25 16.75 -2.25 8.25 6.25 16.75 14.75 14.75 16.75'></polygon>
          </svg>

          {chooseName ? <h1 className='vehicles_title'>hoe heet de baby?</h1> : ``}

          <div className='partner_div_height' ref={$el => $svg = $el}>
            <SvgCharacter />
          </div>

          <form onSubmit={onSubmit} className='vehicle_name_form'>
            <input type='text' ref={$el => $name = $el} className='vehicle_name_input' onChange={onChange} placeholder='voornaam' onFocus={onFocus} onBlur={onBlur} />
            <input type='submit' value='bevestig' className={isMobile ? `general_btn_layout btn_disabled mobile_btn_pos` : `general_btn_layout btn_disabled pc_btn_pos`} disabled='true' ref={$el => $submit = $el} />
          </form>

        </div>
      ) : <Character />
    ) : winner === 1 ? <Win win={true} /> : <Win win={false} />
  );
};

Name.propTypes = {
  chooseName: bool.isRequired,
  setCharacterView: func.isRequired,
  chooseCharacter: bool.isRequired,
  winner: number.isRequired,
  setWinner: func.isRequired,
  setName: func.isRequired
};

export default inject(
  ({store}) => {
    return ({
      chooseName: store.chooseName,
      setCharacterView: store.setCharacterView,
      chooseCharacter: store.chooseCharacter,
      winner: store.winner,
      setWinner: store.setWinner,
      setName: store.setName
    });
  }
)(
   observer(Name)
);
