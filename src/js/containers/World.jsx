import React, {Component} from 'react';
import ControllerCharacter from '../components/ControllerCharacter';

class World extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    socket.on(`update`, users => {

      const currentSocketIds = [];
      let {players} = this.state;
      players = [];

      for (const clientId in users) {
        if (users[clientId].playing === true) {
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
      <div>
        {
          players.map(player => {
            return (
              <div key={player.id} style={{
                position: `absolute`,
                left: `${player.x}px`,
                bottom: `${player.y}px`
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

export default World;
