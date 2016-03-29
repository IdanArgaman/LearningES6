console.log('%c --- More Generators --- ', 'color: blue; font-weight:bold; background-color:orange');

console.log('yield delegation');
/* The [1,2,3] value produces an iterator which will step through its values, so the
 *foo() generator will yield those values out at its consumed */
(function() {
  function* foo() {
    yield * [1, 2, 3];
  }

  /* The above is the same as:

  function *foo() {
    yield 1;
    yield 2;
    yield 3;
  }

  */

  var it = foo();

  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
})();

console.log('yield delegation with return');

(function() {

  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }

  /* While the 1, 2, and 3 values would be yield`ed out of `*foo() and then out of
   *bar(), the 4 value returned from *foo() is the completion value of the yield
   *foo() expression, which then gets assigned to x. */

  function* bar() {
    var x = yield * foo();
    console.log(x); // 4
  }

  var it = bar();

  it.next();
  it.next();
  it.next();
  it.next();

})();

console.log('yield recursion');

(function () {

  function *foo(x) {
  if (x < 3) {
  x = yield *foo( x + 1 );
  }
  return x * 2;
  }
  var it = foo( 1 );

  // Start the generator
  console.log(it.next());
})();
