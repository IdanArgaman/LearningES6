console.log('%c --- Iterators --- ', 'color: blue; font-weight:bold; background-color:orange');

var arr = [1,2,3];

// Note the use of a symbol in order to get an iterator

var it = arr[Symbol.iterator]();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }

///////////////////////////////
// Strings are also iterable //
///////////////////////////////

var greeting = "hello world";
var it = greeting[Symbol.iterator]();
console.log(it.next()); // { value: "h", done: false }
console.log(it.next());

/////////
// MAP //
/////////

var m = new Map();

m.set( "foo", 42 );
m.set( { cool: true }, "hello world" );


var it1 = m[Symbol.iterator]();

// Note the use of the method that belongs to the map object in order to create an iterator
var it2 = m.entries();

// Each value is an array, the iterators are independent
console.log(it1.next()); // { value: [ "foo", 42 ], done: false }
console.log(it2.next()); // { value: [ "foo", 42 ], done: false }
