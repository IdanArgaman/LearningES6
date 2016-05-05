console.log('%c --- "of" Keyword --- ', 'color: blue; font-weight:bold; background-color:orange');

console.log(Array.of(3));

console.log('%c --- extending an existing array --- ', 'color: blue; font-weight:bold; background-color:orange');

class MyCoolArray extends Array {
  sum() {
    return this.reduce(function reducer(acc, curr) {
      return acc + curr;
    }, 0);
  }


}

var z = MyCoolArray.of( 3 );
console.log(z.length); // 1
console.log(z.sum()); // 3

console.log('%c ---"of" and "from" --- ', 'color: blue; font-weight:bold; background-color:orange');

// Doesn't work as the book demonstrates

var y = new MyCoolArray( 1, 2, 3 );
console.log(y.slice(1) instanceof MyCoolArray);

var x = new MyCoolArray( 1, 2, 3 );
console.log(x.slice( 1 ) instanceof Array); // true
console.log(MyCoolArray.from( x ) instanceof Array); // false
console.log(MyCoolArray.of( [2, 3] ) instanceof Array); // false
console.log(MyCoolArray.from( x ) instanceof MyCoolArray); // true
console.log(MyCoolArray.of( [2, 3] ) instanceof MyCoolArray); // true

console.log('%c --- copyWithin --- ', 'color: blue; font-weight:bold; background-color:orange');

console.log([1,2,3,4,5].copyWithin( 3, 0 )); // [1,2,3,1,2]
console.log([1,2,3,4,5].copyWithin( 3, 0, 1 )); // [1,2,3,1,5]
console.log([1,2,3,4,5].copyWithin( 0, -2 )); // [4,5,3,4,5]
console.log([1,2,3,4,5].copyWithin( 0, -2, -1 )); // [4,2,3,4,5]
