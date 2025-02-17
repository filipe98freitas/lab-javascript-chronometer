class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }
}

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback;
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 10);
    }
  }
  

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
