import {observable, action} from 'mobx';
import fetch from 'isomorphic-fetch';

class Store {

  constructor() {
    this.getColors();
  }

  @observable
  selectType = `SkinTone`;

  @observable
  id = ``;

  @observable
  previewTypes = [{
    type: `SkinTone`,
    types: [`#FBEFEF`, `#F4C0B3`, `#EFA389`, `#A67C52`, `#8C6239`, `#4D3319`, `#DA3E47`, `#E8852D`, `#E9C858`, `#7ED321`, `#2685AB`, `#7BB4CB`]
  }, {
    type: `Eyes`,
    types: [`Superman`, `Evil`, `Glasses`]
  }, {
    type: `Facial`,
    types: [`Superman`, `Evil`, `Cigar`]
  }, {
    type: `Hair`,
    types: [`Superman`, `Evil`, `Unicorn`, `Trump`]
  }, {
    type: `Body`,
    types: [`Superman`, `Evil`, `Unicorn`, `Suit`, `Bride`]
  }, {
    type: `Legs`,
    types: [`Superman`, `Evil`, `Unicorn`]
  }, {
    type: `Accessoire`,
    types: [`Balloon`, `Nutella`]
  },
  ]


  @observable
  character = {
    hairColor: {
      Superman: `#C1272D`,
      Evil: `#DB917D`,
      Unicorn: {
        primary: `#93278F`,
        secondary: `#842484`,
        tertiary: `#E39AE5`
      },
      Trump: {
        primary: `#FFD63F`,
        secondary: `#E8BF3D`
      }
    },

    eyesColor: {
      Superman: `#C1272D`,
      Evil: `#560909`,
      Glasses: `#FFFF00`
    },

    facialHairColor: {
      Superman: `#C1272D`,
      Evil: `#7F47DD`,
      Cigar: `#FFFF00`
    },

    legsColor: {
      Superman: `#C1272D`,
      Evil: `#7F47DD`
    },

    accessoireColor: {
      Balloon: `#7F47DD`,
      Nutella: `#7F47DD`
    },

    bodyTypeColor: {
      color: `#FBEFEF`
    },

    hair: `Trump`,
    eyes: `Glasses`,
    facialHair: `Cigar`,
    bodyType: `Bride`,
    legs: `Superman`,
    accessoire: `Nutella`
  }

  @observable
  colors = []

  @action
  getColors() {
    return fetch(`./assets/data/colors.json`)
    .then(d => d.json())
    .then(d => {
      this.colors.push(d);
    });
  }

  @action
  setType = type => this.selectType = type;

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
    case `Accessoire`: this.character.accessoire = type;
      break;

    case `SkinTone`: this.character.bodyTypeColor.color = type;
      break;

    }
  }

  @action
  selectedType(type) {
    let name = ``;

    switch (type) {
    case `Body`:
      name = `bodyType`;
      break;
    case `Hair`:
      name = `hair`;
      break;
    case `Eyes`:
      name = `eyes`;
      break;
    case `Legs`:
      name = `legs`;
      break;
    case `Facial`:
      name = `facialHair`;
      break;
    case `Accessoire`:
      name = `accessoire`;
      break;
    }
    return name;
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
