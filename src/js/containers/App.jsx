import React from 'react';
import {Redirect} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import Character from '../components/Character';

const getUrlParameter = name => {
  name = name.replace(/[\[]/, `\\[`).replace(/[\]]/, `\\]`);
  const regex = new RegExp(`[\\?&]${  name  }=([^&#]*)`);
  const results = regex.exec(location.search);
  return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ` `));
};

const App = () => {

  const targetPlace = getUrlParameter(`place`);
  if (!targetPlace) {
    return <Redirect to='/index.html?place=home' />;
  }

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <header>
        {
          targetPlace ? (
            <Character place={targetPlace} />
          ) : `error`
        }

      </header>

    </section>
  );
};

export default App;
