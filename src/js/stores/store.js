import {observable, action} from 'mobx';
import fetch from 'isomorphic-fetch';

class Store {

  constructor() {
    this.getColors();
  }

  @observable
  previewTypes = [{
    type: `SkinTone`,
    types: [`#FBEFEF`, `#F4C0B3`, `#EFA389`, `#A67C52`, `#8C6239`, `#4D3319`, `#DA3E47`, `#E8852D`, `#E9C858`, `#7ED321`, `#2685AB`, `#7BB4CB`]
  }, {
    type: `Eyes`,
    types: [`Default`, `Angry`, `Blush`, `Chinese`, `Sunglasses`, `Glasses`]
  }, {
    type: `Facial`,
    types: [`Default`, `Goatie`, `Pacifier`, `HeartPacifier`, `Mouse`]
  }, {
    type: `Hair`,
    types: [`Default`, `Bride`, `Curly`, `Mohawk`, `Trump`, `Unicorn`]
  }, {
    type: `Body`,
    types: [`Default`, `Bride`, `KaaDrie`, `Suit`, `Superman`, `Tats`]
  }, {
    type: `Legs`,
    types: [`Default`, `Classy`, `DaiperBoots`, `Daiper`, `Mermaid`, `Superman`]
  }, {
    type: `Accessoire`,
    types: [`Default`, `Balloon`, `Nutella`, `Cape`, `Wings`]
  }]

  @observable
  character = {
    eyesColor: {
      Default: `#C1272D`,
      Angry: `#560909`,
      Sunglasses: `#FFFF00`,
      Blush: `#C1272D`,
      Chinese: `#42210B`,
      Glasses: `#FFFF00`
    },

    facialHairColor: {
      Pacifier: `#7F47DD`,
      HeartPacifier: `#AA242E`,
      Goatie: `#C1272D`,
      Mouse: `#CCCCCC`
    },

    hairColor: {
      Default: `#DB917D`,
      Bride: `#42210B`,
      Curly: `#42210B`,
      Mohawk: `#C1272D`,
      Trump: {
        primary: `#FFD63F`,
        secondary: `#E8BF3D`
      },
      Unicorn: {
        primary: `#93278F`,
        secondary: `#842484`,
        tertiary: `#E39AE5`
      }
    },

    legsColor: {
      Default: `#534741`,
      Superman: `#FF0000`,
      Classy: `#333333`,
      DaiperBoots: `#771a9d`,
      Daiper: `#FF0000`,
      Mermaid: `#00FFFF`
    },

    accessoireColor: {
      Balloon: `#C60505`,
      Nutella: `#42210B`,
      Cape: `#C1272D`,
      Wings: `#F7931E`
    },

    bodyTypeColor: {
      color: `#FBEFEF`
    },

    hair: `Default`,
    eyes: `Default`,
    facialHair: `Default`,
    bodyType: `Default`,
    legs: `Default`,
    accessoire: `Default`,
    partner: `Unicorn`
  }

  @observable
  place = ``;

  @observable
  choosingPartner = true;

  @observable
  chooseName = true;

  @observable
  chooseCharacter = true;

  @observable
  play = false;

  @observable
  winner = 0;

  @observable
  time = 0;

  @observable
  stopTimer = false;

  @observable
  name = ``

  @observable
  infoPage = false;

  @observable
  partner = 0;

  @observable
  info = false;

  @action
  setPlace = place => this.place = place;

  @action
  setInfo = bool => this.info = bool;

  @action
  setPartner = partner => {
    if (partner >=  3) {
      this.partner = 0;
    } else {
      this.partner = partner;
    }
  }

  @action
  setPlay = bool => this.play = bool;

  @action
  timerAction = bool => this.stopTimer = bool;

  @action
  setTime = time => this.time = time;

  @action
  setWinner = win => this.winner = win;

  @action
  setName = name => this.name = name;

  @action
  backToInfo = bool => this.infoPage = bool;

  @observable
  selectType = `SkinTone`;

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
  setPartnerPage = page => this.choosingPartner = page;

  @action
  setCharacterView = bool => this.chooseCharacter = bool;


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

    case `Partner`: this.character.partner = type;
      break;

    default:
    // if 1 argument is given (the character object) set character (selectType) as the character
      this.character = selectType;
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
