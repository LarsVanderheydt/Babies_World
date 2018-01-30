import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';

import Character from './Character';
import Controller from './Controller';
import World from './World';

class App extends Component {

  renderCharacter({match}) {
    const {place} = match.params;
    if (!place) return <Redirect to='/' />;

    return <Character place={place} />;
  }

  renderController({match}) {
    const {id} = match.params;
    if (!id) return <Redirect to='/mars' />;

    return <Controller targetId={id} />;
  }

  render() {
    return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <section className='character'>
          <Router>
            <Switch>
              <Route
                exact path='/:place'
                render={this.renderCharacter}
              />

              <Route
                exact path='/controller/:id'
                render={this.renderController}
              />

              <Route
                exact path='/place/world'
                render={World}
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
