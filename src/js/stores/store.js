import {observable, action} from 'mobx';

class Store {

  @observable
  previewTypes = [{
    type: `Hair`,
    types: [`Superman`, `Evil`, `Unicorn`]
  }, {
    type: `Eyes`,
    types: [`Superman`, `Evil`, `Unicorn`]
  }, {
    type: `Facial`,
    types: [`Superman`, `Evil`]
  }, {
    type: `Body`,
    types: [`Superman`, `Evil`, `Unicorn`]
  }, {
    type: `Legs`,
    types: [`Superman`, `Evil`, `Unicorn`]
  }]

  @observable
  selectType = `Body`;

  @observable
  character = {
    hairColor: {
      Superman: `#C1272D`,
      Evil: `#DB917D`,
      Unicorn: {
        primary: `#93278F`,
        secondary: `#842484`,
        tertiary: `#E39AE5`
      }
    },
    hair: `Superman`,
    eyes: `Superman`,
    facialHair: `Superman`,
    bodyType: `Superman`,
    legs: `Superman`
  }

  @observable
  colors = {
    Superman: {
      primary: [
        `#a0fb89`,
        `#f7f771`,
        `#ed5b5b`,
        `#bbbbbb`
      ]
    },
    Evil: {
      primary: [
        `#89f4fb`,
        `#f7a971`,
        `#b15bed`,
        `#ff6ed2`
      ]
    },
    Unicorn: {
      primary: [
        `#93278F`,
        `#89f4fb`,
        `#b15bed`,
        `#a0fb89`
      ],
      secondary: [
        `#842484`,
        `#b15bed`,
        `#89f4fb`,
        `#f7f771`
      ],
      tertiary: [
        `#E39AE5`,
        `#46a62e`,
        `#1f8990`,
        `#771a9d`
      ]
    }
  }

  @action
  setCharacter = (selectType, type) => {
    switch (selectType) {
    case `Hair`: this.character.hair = type;
      break;

    case `Eyes`: this.character.eyes = type;
      break;

    case `Facial`: this.character.facialHair = type;
      break;

    case `Body`: this.character.bodyType = type;
      break;

    case `Legs`: this.character.legs = type;
      break;
    }
  }

  @action
  setType = type => {
    this.selectType = type;
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
