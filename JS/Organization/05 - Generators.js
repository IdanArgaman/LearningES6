console.log('%c --- Generators --- ', 'color: blue; font-weight:bold; background-color:orange');


// The place of the '*' charcater is not important
function* foo() {

  var x = 10;
  var y = 20;

  yield; // Iterator returns and paused

  var z = x + y;
}

console.log("Simple generator");

// The generator would not run yet
var it = foo();

// Now it is running. The iterator's body executes until the yield keyword
console.log(it.next());

function* bar() {
  while (true) {
    yield Math.random();
  }
}

console.log("Random numbers");
var it2 = bar();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

console.log("Real Yield");

function* gap() {
  var x = yield 10;
  console.log(x);
}
var it3 = gap();

// Exceutes the iterator which returns before setting x's value
it3.next();

// Now 'x' will contain a value and it will be log
// Note that the value we equip with this 'next' call, is the return
// value from the prvious 'yield' statement

/* FROM THE BOOK:

When you resume the generator — using the it.next(..) — whatever
value (if any) you resume with will replace/complete the whole yield 10 expression,
meaning whatever value that is will be assigned to the x variable.

*/

it3.next(5);

console.log('yield inside array');

function* taz() {
  var arr = [yield 1, yield 2, yield 3];
  console.log(arr, yield 4);
}

var it4 = taz();

console.log(it4.next(5)); // There is not previous yield so the 5 value doesn't influence anything
console.log(it4.next(6)); // first array item
console.log(it4.next(7)); // second array item
console.log(it4.next(8)); // third array item
it4.next(9); // the value return from 'yield 4'
