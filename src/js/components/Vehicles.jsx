import React from 'react';
import {bool, func, number} from 'prop-types';
import {inject, observer} from 'mobx-react';
import Character from './Character/';
import Carousel from './Carousel';
import Win from './Win';
import Lose from './Lose';

const Vehicles = ({choosingVehicle, setVehicle, setCharacterView, chooseCharacter, winner, setWinner, setName}) => {
  let $name;
  let $submit;

  const handleNextClick = () => {
    choosingVehicle = !choosingVehicle;
    setVehicle(choosingVehicle);
  };

  const handleCharacterBack = () => {
    setCharacterView(true);
  };

  const onSubmit = e => {
    e.preventDefault();

    setName($name.value);
    setWinner(2);
  };

  const onChange = () => {
    if ($name.value) {
      $submit.disabled = false;
    } else {
      $submit.disabled = true;
    }
  };

  return (
    winner === 0 ? (
      !chooseCharacter ? (
        <div className='vehicle_page'>

          {<button onClick={choosingVehicle ? handleCharacterBack : handleNextClick} className='vehicle_back'>Back</button>}

          <div className='carousel_div_height'>
            <Carousel choosingVehicle={choosingVehicle} page='vehicles' />
          </div>

          {
            choosingVehicle ? (
              <div className='vehicle_text'>
                <h1 className='vehicle_name'>Ooievaar</h1>
                <button className='vehicle_next' onClick={handleNextClick}>verder</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className='vehicle_name_form'>
                <input type='text' ref={$el => $name = $el} className='vehicle_name_input' onChange={onChange} />
                <input type='submit' value='verder' className='vehicle_next' disabled='true' ref={$el => $submit = $el} />
              </form>
            )
          }

        </div>
      ) : <Character />
    ) : winner === 1 ? <Win /> : <Lose />
  );
};

Vehicles.propTypes = {
  choosingVehicle: bool.isRequired,
  setVehicle: func.isRequired,
  setCharacterView: func.isRequired,
  chooseCharacter: bool.isRequired,
  winner: number.isRequired,
  setWinner: func.isRequired,
  setName: func.isRequired
};

// export default Vehicles;

export default inject(
  ({store}) => {
    return ({
      choosingVehicle: store.choosingVehicle,
      setVehicle: store.setVehicle,
      setCharacterView: store.setCharacterView,
      chooseCharacter: store.chooseCharacter,
      winner: store.winner,
      setWinner: store.setWinner,
      setName: store.setName
    });
  }
)(
   observer(Vehicles)
);
