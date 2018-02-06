import React from 'react';
import {Redirect} from 'react-router-dom';
// import DevTools from 'mobx-react-devtools';
import Character from '../components/Character';
import World from './World';

const getUrlParameter = name => {
  name = name.replace(/[\[]/, `\\[`).replace(/[\]]/, `\\]`);
  const regex = new RegExp(`[\\?&]${  name  }=([^&#]*)`);
  const results = regex.exec(location.search);
  return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ` `));
};

const App = () => {
  let targetWorld, targetId;


  const targetPlace = getUrlParameter(`place`);
  if (!targetPlace) {

    targetWorld = getUrlParameter(`world`);
    if (!targetWorld) {

      targetId = getUrlParameter(`id`);
      if (!targetId) {
        return <Redirect to='/index.html?world=1' />;
      }
    }
  }

  return (
    <section>

      {/* {process.env.NODE_ENV !== `production` ? <DevTools /> : null} */}

      <header>
        {
          targetPlace ? (
            <Character place={targetPlace} />
          ) : targetWorld ? (
            <World place={targetWorld} />
          ) : `no page specified`
        }

      </header>
    </section>
  );
};

export default App;
