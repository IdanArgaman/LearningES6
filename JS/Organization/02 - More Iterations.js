console.log('%c --- More Iterators --- ', 'color: blue; font-weight:bold; background-color:orange');

var tasks = {
  // The task iterator returns an object which is an iterator
  // That uses a closure 'steps' that is unique for each iterator instance
  [Symbol.iterator]() {

    var steps = this.actions.slice();

    return {

      // make the iterator an iterable
      [Symbol.iterator]() {
        return this;
      },

      next(...args) {
        if (steps.length > 0) {
          let res = steps.shift()(...args);
          return {
            value: res,
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      },

      return (v) {
        steps.length = 0;
        return {
          value: v,
          done: true
        };
      }
    };
  },
  actions: []
};

// USAGE - Feeding the actions

tasks.actions.push(
  function step1(x) {
    console.log("step 1:", x);
    return x * 2;
  },
  function step2(x, y) {
    console.log("step 2:", x, y);
    return x + (y * 2);
  },
  function step3(x, y, z) {
    console.log("step 3:", x, y, z);
    return (x * y) + z;
  }
);

var it = tasks[Symbol.iterator]();

// Calling next with argments

it.next(10); // step 1: 10
// { value: 20, done: false }

it.next(20, 50); // step 2: 20 50
// { value: 120, done: false }

it.next(20, 50, 120); // step 3: 20 50 120
// { value: 1120, done: false }

it.next(); // { done: true }
