console.log('%c --- Regular Expressions --- ', 'color: blue; font-weight:bold; background-color:orange');

// Sticky

/*

Sticky essentially means the regular expression has a virtual anchor at its
beginning that keeps it rooted to matching at only the position indicated by
the regular expression’s lastIndex property.

*/

var re2 = /foo/y,  // Note the 'y' character which means a sticky patterns
str = "++foo++";

console.log(re2.lastIndex); // 0
re2.test( str ); // false -- "foo" not found at `0`

console.log(re2.lastIndex); // 0
re2.lastIndex = 2;
re2.test( str ); // true, foo is found when we try to match from the third character

console.log(re2.lastIndex); // 5 -- updated to after previous match
re2.test( str ); // false
console.log(re2.lastIndex);
