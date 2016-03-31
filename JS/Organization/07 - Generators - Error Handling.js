console.log('%c --- Generators - Error Handling --- ', 'color: blue; font-weight:bold; background-color:orange');

function* foo() {
  try {
    // yield -> stop here, get this value, I'm expecting to evaluate the value passed to me by the next call to 'next'

    yield 1;
  } catch (err) {
    console.log(err);
  }
  yield 2;
  throw "Hello!";
}

var it = foo();

// next -> starts the iterator until yield expression is found in the generator
// when yield is encoutered, get its value

it.next(); // { value: 1, done: false }

try {
  // We feed the 'yield 1' expression at *foo with an exception.
  // When this yield expression evaluates the passed value (exception
  // in this case) it will throw an exception itself

  it.throw("Hi!"); // Hi! // { value: 2, done: false }

  // Fill 'yield 2' expression with nothing and continue the iterator until
  it.next();

  // Because the iterator throws an exception
  console.log("never gets here");
} catch (err) {
  console.log(err); // Hello!
}
