import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';

import Character from '../components/Character';
import World from './World';

class App extends Component {

  renderCharacter({match}) {
    const {place} = match.params;
    if (!place) return <Redirect to='/home' />;

    return <Character place={place} />;
  }


  render() {
    return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <section className='character'>
          <Router>
            <Switch>
              <Route
                exact path='/place/world'
                render={World}
              />

              <Route
                exact path='/:place'
                render={this.renderCharacter}
              />

              <Route
                render={() => <Redirect to='/mars' />}
              />

            </Switch>
          </Router>

        </section>

      </section>
    );
  }
}

export default App;
