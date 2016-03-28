console.log('%c --- More Iterators 2 --- ', 'color: blue; font-weight:bold; background-color:orange');

var a = [1,2,3,4,5];

// Getting the iterator for the array
var it = a[Symbol.iterator]();

var [x,y] = it; // take just the first two elements from `it` -> destructing  and iterator

var [z, ...w] = it; // take the third, then the rest all at once -> continute the destruction from third element

// is `it` is fully exhausted? Yep.

it.next(); // { value: undefined, done: true }

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(w);
