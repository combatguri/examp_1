// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const GArray = function (argNum) {
  const _G = Object.assign(this, {
    dataStore: [],
    pos: argNum,
    argNum: argNum,
  });

  _G.setData = () => {
    for (let i = 0; i < argNum; i++) {
      const randomNum = Math.floor(Math.random() * argNum + 1);
      _G.dataStore.push(randomNum);
    }
  };

  _G.clearData = () => {
    this.dataStore = [];
  };

  _G.toString = () => {
    console.log(this.dataStore);
  };

  _G.init = () => {
    for (let i = 1; i < argNum; i++) {
      _G.dataStore.push(i);
    }
  };

  _G.init();
};

const numElements = 100;

// 기본정렬
const basicSort = new GArray(numElements);
basicSort.toString();
