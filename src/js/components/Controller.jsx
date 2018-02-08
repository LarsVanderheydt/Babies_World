import nipplejs from 'nipplejs';
import {observer} from 'mobx-react';
import React, {Component} from 'react';

import BackButtonController from './BackButtonController';
import Restart from './Restart';

let $controllerDiv;
let x = 1, y = 1;
let $nipple;

const move = {
  angle: 0,
  speed: 1,
  x: 0,
  y: 0,
  move: false
};

@observer
class Controller extends Component {

  componentDidMount() {
    if ($controllerDiv) {
      socket.emit(`playing`, true);
    }

    const jStick = nipplejs.create({
      zone: $nipple,
      mode: `static`,
      position: {left: `50%`, top: `50%`},
      color: `red`
    });


    jStick.on(`move`, (evt, data) => {
      move.angle = data.angle.degree;
    }).on(`start`, () => {
      move.move = true;
    }).on(`end`, () => {
      move.move = false;
    });

    this.updatePosition();
  }

  updatePosition() {
    const {angle, speed} = move;

    if (move.move === true) {
      x += speed * Math.cos(angle * Math.PI / 180);
      y += speed * Math.sin(angle * Math.PI / 180);

      socket.emit(`update`, {x: x, y: y});
    }

    requestAnimationFrame(() => this.updatePosition());
  }

  render() {
    return (
      <div className='controller_div' ref={$el => $controllerDiv = $el}>
        <div className='controller_top_buttons'>
          <BackButtonController />
          <button className='controller_share'>Share</button>
        </div>
        <div ref={$el => $nipple = $el}></div>
        <Restart />
      </div>
    );
  }
}

export default Controller;
