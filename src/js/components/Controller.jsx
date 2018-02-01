import nipplejs from 'nipplejs';
import {observer} from 'mobx-react';
import React, {Component} from 'react';

import BackButtonController from './BackButtonController';

@observer
class Controller extends Component {

  componentDidMount() {
    console.log(this.props);

    nipplejs.create({
      zone: document.getElementById(`nipple_js`),
      mode: `static`,
      position: {left: `50%`, top: `50%`},
      color: `red`
    });
  }

  render() {
    return (
      <div className='controller_div'>
        <div className='controller_top_buttons'>
          <BackButtonController />
          <button className='controller_share'>Share</button>
        </div>
        <div id='nipple_js'></div>
        <button className='general_btn_layout'>begin opnieuw</button>
      </div>
    );
  }
}

export default Controller;
