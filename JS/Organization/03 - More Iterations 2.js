console.log('%c --- More Iterators 2 --- ', 'color: blue; font-weight:bold; background-color:orange');

// If number doens't provide an iterable property
// We define one

if (!Number.prototype[Symbol.iterator]) {

  Object.defineProperty(
    Number.prototype,
    Symbol.iterator, {
      writable: true,
      configurable: true,
      enumerable: false,
      value: function iterator() {
        var i, inc, done = false,
          top = +this;
        // iterate positively or negatively?
        inc = 1 * (top < 0 ? -1 : 1);
        return {
          // make the iterator itself an iterable!
          [Symbol.iterator]() {
            return this;
          },
          next() {

            if (!done) {
              // initial iteration always 0
              if (i == null) {
                i = 0;
              }
              // iterating positively
              else if (top >= 0) {
                i = Math.min(top, i + inc);
              }
              // iterating negatively
              else {
                i = Math.max(top, i + inc);
              }
              // done after this iteration?
              if (i == top) done = true;
              return {
                value: i,
                done: false
              };
            } else {
              return {
                done: true
              };
            }
          }
        };
      }
    }
  );
}

for (var i of 3) {
console.log( i );
}
// 0 -1 -2 -3
console.log([...-3]);
