console.log('%c --- Numbers --- ', 'color: blue; font-weight:bold; background-color:orange');

// Note the prefix used to designate the number's base

console.log(Number( "42" )); // 42
console.log(Number( "0o52" )); // 42
console.log(Number( "0x2a" )); // 42
console.log(Number( "0b101010" )); // 42

var a = 42;

// Not ES6 feature but allows us to print the number in different bases

console.log(a.toString()); // "42" -- also `a.toString( 10 )`
console.log(a.toString( 8 )); // "52"
console.log(a.toString( 16 )); // "2a"
console.log(a.toString( 2 )); // "101010"
