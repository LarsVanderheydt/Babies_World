import React, {Component} from 'react';
import ControllerCharacter from '../components/ControllerCharacter';
import {string} from 'prop-types';
import shortid from 'shortid';

class World extends Component {
  state = {
    players: [],
    coins: [],
    topFive: []
  }

  componentDidMount() {
    document.body.style.backgroundColor = `#FFDFEC`;
    socket.on(`update`, users => {

      const currentSocketIds = [];
      let {players, topFive} = this.state;
      const {coins} = this.state;
      const {world} = this.props;
      players = [];
      topFive = [];

      for (const clientId in users) {
        if (users[clientId].playing === true && users[clientId].place === world) {
          currentSocketIds.push(clientId);

          if (coins.length === 0) {
            for (let i = 0;i < 10;i ++) {
              this.addCoin();
            }
          }

          for (let i = 0;i < coins.length;i ++) {
            const coin = this.collision(coins[i], users[clientId]);
            if (coin) {
              if (coins[i].id === coin.id) {
                coins.splice(i, 1);
                socket.emit(`point`, users[clientId].id);
              }
            }
          }

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


      const topValues = players.sort((a, b) => a.points < b.points).slice(0, 5);
      topFive = topValues;
      this.setState({topFive});

    });



    for (let i = 0;i < 10;i ++) {
      this.addCoin();
    }
  }

  collision(coin, player) {
    const x1 = coin.x;
    const y1 = coin.y;
    const h1 = 3;
    const w1 = 3;
    const b1 = y1 + h1;
    const r1 = x1 + w1;

    const x2 = player.x;
    const y2 = player.y;
    const h2 = 15;
    const w2 = 15;
    const b2 = y2 + h2;
    const r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return coin;
  }

  addCoin() {
    const {coins} = this.state;
    const coin = {};

    coin.id = shortid.generate();
    coin.x = Math.floor(Math.random() * 100);
    coin.y = Math.floor(Math.random() * 100);

    coins.push(coin);
  }

  render() {
    const {players, coins, topFive} = this.state;

    return (
      <div className='game_field'>

        {
          coins.map(coin => {
            return (
              <div id='coin' key={coin.id} style={{
                position: `absolute`,
                left: `${coin.x}%`,
                bottom: `${coin.y}%`,
                width: `3rem`,
                height: `3rem`,
                backgroundColor: `#F7E31B`,
                borderRadius: `120rem`,
                border: `.3rem solid #CABD15`
              }}>
              </div>
            );
          })
        }

        {
          players.map(player => {
            return (
              <div key={player.id} style={{
                position: `absolute`,
                left: `${player.x}%`,
                bottom: `${player.y}%`,
                height: `15rem`
              }}>
                <ControllerCharacter character={player.character} id={player.id} />
              </div>
            );
          })
        }

        <div className='highscores'>
          <h1>highscores</h1>

          <ol>
            {
              topFive.map(player => {
                return (
                  <li key={player.id} className='highscore_list_item'>
                    <p>{topFive.indexOf(player) + 1}.</p>
                    <p className='highscore_name'>{player.name}</p>
                    <p>{player.points}pt</p>
                  </li>
                );
              })
            }
          </ol>
        </div>

      </div>
    );
  }
}

World.propTypes = {
  world: string.isRequired
};

export default World;
