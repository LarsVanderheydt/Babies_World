import React, {Component} from 'react';
import nipplejs from 'nipplejs';
let $nipple;
const move = {
  angle: 0,
  speed: .1,
  move: false
};

let $controllerDiv;
let x = 1, y = 1;
let animationFrame;

class Nipple extends Component {
  state = {}

  updatePosition() {
    animationFrame = undefined;
    const {angle, speed} = move;

    if (x >= 96) x = 1;
    if (x <= - 10) x = 95;

    if (y >= 96) y = 1;
    if (y <= - 10) y = 95;

    if (move.move === true) {
      x += speed * Math.cos(angle * Math.PI / 180);
      y += speed * Math.sin(angle * Math.PI / 180);
      socket.emit(`update`, {x: x, y: y});
    }

    this.update();
  }

  update() {
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(() => this.updatePosition());
    }
  }

  setNipple() {
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

  componentDidMount() {
    if ($controllerDiv) {
      socket.emit(`playing`, true);
    }

    this.setNipple();
  }

  componentWillUnmount() {
    socket.emit(`playing`, false);
    x = 0, y = 0;
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = undefined;
    }
  }

  render() {
    return (
      <div ref={$el => $nipple = $el}></div>
    );
  }
}

export default Nipple;
