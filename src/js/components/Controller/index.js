/* eslint-disable react/jsx-filename-extension */

import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {string} from 'prop-types';

import BackBtn from './BackBtn';
import Restart from '../Restart';
import WonDrink from './WonDrink';
import Nipple from './Nipple';

@observer
class Controller extends Component {
  state = {
    win: 0
  }

  componentDidMount() {
    socket.emit(`playing`, true);
  }

  onShare() {
    const random = Math.floor(Math.random() * 100);
    if (random >= 0 && random <= 100) {
      this.setState({win: 1});
    } else {
      this.setState({win: 2});
    }

    if (navigator.share !== undefined) {
      navigator.share({
        title: `Speel dit spel en win ...`,
        url: `https://babiesworld.herokuapp.com/index.html?place=home`
      });
    }
  }

  setWin(set) {
    let {win} = this.state;
    win = set;
    this.setState({win});
    socket.emit(`playing`, true);
  }

  render() {
    const {place} = this.props;
    const {win} = this.state;

    return (
      place !== `home` && win === 1 ? (
        <WonDrink setWin={this.setWin.bind(this)} />
      ) : (
        <div className='controller_div'>
          <div className='controller_top_buttons'>
            <BackBtn />

            <svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' className='character_finish_btn' onClick={() => this.onShare()}>
              <g id='iPhone-8-Copy-3' transform='translate(-321.000000, -47.000000)' fill='#9B1B51'>
                  <path d='M341.404855,62.8891797 C339.941524,62.8891797 338.658958,63.5775401 337.81826,64.6342587 L330.010961,60.6776084 C330.11282,60.3007168 330.184552,59.9110251 330.184552,59.5 C330.184552,59.0505746 330.101343,58.6281716 329.977964,58.2228354 L337.745094,54.2832518 C338.585791,55.3897485 339.902789,56.1065536 341.404855,56.1065536 C343.948468,56.1065536 346,54.0727614 346,51.5554102 C346,49.0394812 343.948468,47 341.404855,47 C338.871284,47 336.814014,49.0394812 336.814014,51.5554102 C336.814014,51.9664353 336.88718,52.356127 336.989039,52.7330185 L329.187478,56.6896689 C328.346781,55.6343725 327.058476,54.9445898 325.595145,54.9445898 C323.057271,54.9445898 321,56.984071 321,59.5 C321,62.0173512 323.057271,64.0554102 325.595145,64.0554102 C327.097211,64.0554102 328.414209,63.3286494 329.254906,62.2221527 L337.022036,66.1617363 C336.898657,66.5727614 336.80971,66.9951644 336.80971,67.4445898 C336.80971,69.9619411 338.871284,72 341.404855,72 C343.942729,72 346,69.9619411 346,67.4445898 C346,64.9286608 343.942729,62.8891797 341.404855,62.8891797 Z' id='share'></path>
              </g>
            </svg>

            <Nipple />

          </div>

          <Restart />
        </div>
      )
    );
  }
}

Controller.propTypes = {
  place: string.isRequired
};

export default Controller;
