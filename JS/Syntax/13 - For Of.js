console.log('%c --- For Of Loops --- ', 'color: blue; font-weight:bold; background-color:orange');

// 'c' is the alias for each letter in the 'hello'
for (var c of "hello") {
  console.log( c );
}

var o = {};

for (o.a of [1,2,3]) {
  console.log( o.a );
}

// Using destructor over an array of objects
for ({x: o.a} of [ {x: 1}, {x: 2}, {x: 3} ]) {
  console.log( o.a );
}
