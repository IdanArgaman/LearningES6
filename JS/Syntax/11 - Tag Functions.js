console.log('%c --- Tag Functions --- ', 'color: blue; font-weight:bold; background-color:orange');

/*
      A tagged string literal is like a processing step after the interpolations are evaluated
      but before the final string value is compiled
*/

/*

strings   ->
      is an array of all the plain strings (the stuff between any interpolated expressions)

...values ->
      The argument(s) gathered into our values array are the results of the already evaluated interpolation expressions found
      in the string literal. we could have written individual named parameters following the strings parameter.
*/

(function() {

  function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
  }

  var desc = "awesome";
  var temp = foo `Everything is ${desc}!`;

  // MORE COMPLEX

  function tag(strings, ...values) {

    // s is an accamulator, we joing the value in the current index and then 'v' which
    // is the string in the string array

    return strings.reduce(function(s, v, idx) {
      return s + (idx > 0 ? values[idx - 1] : "") + v;
    }, "");

  }

  var text = tag `Everything is ${desc}!`;
  console.log(text);

  // Even more complex

  function dollabillsyall(strings, ...values) {

    return strings.reduce(function(s, v, idx) {
      if (idx > 0) {
        if (typeof values[idx - 1] == "number") {
          // look, also using interpolated
          // string literals!
          s += `$${values[idx-1].toFixed( 2 )}`;
        } else {
          s += values[idx - 1];
        }
      }
      return s + v;
    }, "");
  }

  var amt1 = 11.99,
  amt2 = amt1 * 1.08,
  name = "Kyle";

  // Remember that nnterpolation expressions emits 'tab' characters

  var result = dollabillsyall `Thanks for your purchase, ${name}! Your
  product cost was ${amt1}, which with tax
  comes out to ${amt2}.`;

  console.log(result);
})();
