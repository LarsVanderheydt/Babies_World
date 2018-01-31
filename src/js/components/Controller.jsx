import nipplejs from 'nipplejs';
import {observer} from 'mobx-react';
import React, {Component} from 'react';

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
          <button>Back</button>
          <button>Share</button>
        </div>
        <div id='nipple_js'></div>
        <button>herstart</button>
      </div>
    );
  }
}

export default Controller;
