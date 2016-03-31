console.log('%c --- Generators - Error Handling 2 --- ', 'color: blue; font-weight:bold; background-color:orange');

function* foo() {
  try {
    yield 1;
  } catch (err) {
    console.log(err);
  }
  yield 2;
  throw "foo: e2";
}

function* bar() {
  try {

/* yield * -> is called yield delegation. It passes the iterator from the generator it is called on
   and wait it to be over by the caller's next calls, only then the yield * is free and its generator (*bar)
   continues.
*/
    yield * foo();
    console.log("never gets here");
  } catch (err) {
    console.log(err);
  }
}

var it = bar();

try {
  // Stops at 'yield 1' at foo and returns 1
  it.next(); // { value: 1, done: false }

  // Feeds the 'yield 1' at foo with exception, stops at 'yield 2' and return 2
  it.throw("e1"); // e1
  // { value: 2, done: false }

  // Feeds 'yield 2' with nothing and contiune until the foo's end which throws an exception
  it.next(); // foo: e2
  // { value: undefined, done: true }
  
} catch (err) {
  console.log("never gets here");
}

it.next();
