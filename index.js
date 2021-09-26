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
    startTime: 0,
    endTime: 0,
    duringTime: 0,
  });

  _G.setData = () => {
    for (let i = 0; i < argNum; i++) {
      const randomNum = Math.floor(Math.random() * argNum + 1);
      _G.dataStore[i] = randomNum;
    }
    // _G.dataStore = [
    //   95, 27, 81, 59, 29, 75, 15, 4, 46, 63, 49, 8, 30, 44, 16, 49, 14, 36, 27,
    //   83, 98, 53, 31, 49, 10, 4, 31, 55, 23, 37, 25, 64, 94, 35, 1, 45, 52, 36,
    //   69, 79, 8, 96, 76, 56, 7, 13, 69, 81, 88, 49, 91, 55, 99, 59, 78, 45, 83,
    //   21, 3, 89, 10, 95, 23, 26, 34, 99, 6, 16, 77, 22, 12, 20, 5, 14, 26, 83,
    //   63, 78, 59, 23, 82, 46, 24, 84, 28, 83, 29, 36, 96, 30, 36, 47, 72, 69,
    //   14, 97, 10, 50, 30, 67,
    // ];
  };

  _G.clear = () => {
    for (let i = 0; i < argNum; i++) {
      _G.dataStore[i] = 0;
    }
  };

  _G.insert = (el) => {
    this.dataStore[this.pos++] = el;
  };

  _G.toString = () => {
    console.log('dataStore: ' + this.dataStore);
  };

  _G.swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
  };

  _G.bubleSort = () => {
    const numLength = this.dataStore.length;
    let tmp;
    for (let outer = numLength; outer >= 2; --outer) {
      for (let inner = 0; inner <= outer - 1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1);
          console.log(this.dataStore);
        }
      }
    }
  };

  _G.timer = {
    start() {
      this.startTime = new Date().getTime();
    },
    stop() {
      this.endTime = new Date().getTime();
      console.log(this.endTime - this.startTime);
    },
  };

  _G.init = () => {
    for (let i = 1; i <= argNum; i++) {
      _G.dataStore.push(i);
    }
  };

  _G.init();
};

const numElements = 1000;
const basicSort = new GArray(numElements);

// 기본정렬
basicSort.setData();
basicSort.toString();

basicSort.timer.start();
basicSort.bubleSort();
basicSort.timer.stop();

basicSort.toString();
