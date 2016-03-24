console.log('%c --- The "let" keyword --- ', 'color: blue; font-weight:bold; background-color:orange');

(function() {
  'use strict';

  {
    let a = 2,
      b, c;
    console.log(a);
  }

  // Explicit syntax - doesn't work in ES6 yet
  /*
  let (a = 2, b, c) {

      console.log(a);
  }
  */

  var funcs = [];
  for (let i = 0; i < 5; i++) { // NOTE 'let'
    funcs.push(function() {
      console.log(i);
    });
  }

  funcs[3](); // 3

  for (var i = 0; i < 5; i++) { // NOTE 'var'
    funcs.push(function() {
      console.log(i);
    });
  }

  funcs[3](); // 5

})();
