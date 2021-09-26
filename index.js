// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const GArray = function (argNum) {
  const _gArray = this;

  _gArray.datas = [];

  _gArray.init = () => {
    /*
    for (let i = 0; i < argNum; ++i) {
      // const randomNum = Math.floor(Math.random() + (_gArray.numElements + 1));
      // console.log(randomNum);
      // _gArray.datas.push(randomNum);
      _gArray.datas.push(i);
    }
    */
  };

  _gArray.toString = () => {
    console.log(this.datas);
  };

  _gArray.init();
};

const numElements = 100;
const myNumbs = new GArray(numElements);

myNumbs.toString();
