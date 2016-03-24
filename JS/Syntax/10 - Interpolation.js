console.log('%c --- Interpolation --- ', 'color: blue; font-weight:bold; background-color:orange');

/*
  Any valid expression is allowed to appear inside ${..} in an interpolated string lit‐
  eral, including function calls, inline function expression calls, and even other interpo‐
  lated string literals!
*/

var name = "Kyle";

// Note the back tick syntax
// The variable 'name' is being looked for in order to construct the string
var greeting = `Hello ${name}!`;

console.log(greeting); // "Hello Kyle!"
console.log(typeof greeting); // "string

// Interpolation allows multi line string being written esaily in JS
// Great feature indeed!

var text =
  `Now is the time for all good men
to come to the aid of their
country!`;

console.log(text);

// Using functions in Interpolation

function upper(s) {
  return s.toUpperCase();
}

var who = "reader";

var text =
  `A very ${upper( "warm" )} welcome
to all of you ${upper( `${who}s` )}!`;

console.log( text );
