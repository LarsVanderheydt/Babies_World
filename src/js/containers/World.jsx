import React, {Component} from 'react';
import ControllerCharacter from '../components/ControllerCharacter';
import {string} from 'prop-types';

class World extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    socket.on(`update`, users => {

      const currentSocketIds = [];
      let {players} = this.state;
      const {world} = this.props;
      players = [];

      for (const clientId in users) {
        if (users[clientId].playing === true && users[clientId].place === world) {
          currentSocketIds.push(clientId);

          players.push(users[clientId]);
        }
      }

      const disc = players.filter(player => {
        return currentSocketIds.indexOf(player.id) === - 1;
      });

      players.forEach(player => {
        delete player[disc];
      });

      this.setState({players});
    });
  }

  render() {
    const {players} = this.state;

    return (
      <div className='game_field'>
        {
          players.map(player => {
            return (
              <div key={player.id} style={{
                position: `absolute`,
                left: `${player.x}%`,
                bottom: `${player.y}%`
              }}>
                <ControllerCharacter character={player.character} id={player.id} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

World.propTypes = {
  world: string.isRequired
};

export default World;
