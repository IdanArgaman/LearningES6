console.log('%c --- Classes --- ', 'color: blue; font-weight:bold; background-color:orange');

console.log('%cSimple Class:', 'text-decoration:underline');
class Foo {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
  gimmeXY() {
    return this.x * this.y;
  }
}

var f = new Foo(5, 15);

console.log(f.x); // 5
console.log(f.y); // 15
console.log(f.gimmeXY()); // 75

console.log('%cInheritance:', 'text-decoration:underline');

class Bar extends Foo {
  constructor(a, b, c) {
    super(a, b);
    this.z = c;
  }
  gimmeXYZ() {
    return super.gimmeXY() * this.z;
  }
}

var b = new Bar(5, 15, 25);
console.log(b.x); // 5
console.log(b.y); // 15
console.log(b.z); // 25
console.log(b.gimmeXYZ()); // 1875

console.log('%cExtends:', 'text-decoration:underline');

class ParentA {
  constructor() {
    console.log('ctor ParentA');
    this.id = "a";
  }
  foo() {
    console.log("ParentA:", this.id);
  }
}

class ChildA extends ParentA {
  foo() {

    super.foo();
    console.log("ChildA:", this.id);
  }
}

new ChildA().foo();

console.log('%cExtend native objects:', 'text-decoration:underline');

class MyCoolArray extends Array {
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}
var a = new MyCoolArray(1, 2, 3);
console.log(a.length); // 3
console.log(a); // [1,2,3]
console.log(a.first()); // 1
console.log(a.last()); // 3

return;

console.log('%cstatic:', 'text-decoration:underline');
(function() {
  class Foo {

    /*
      According to http://exploringjs.com/es6/ch_classes.html
      For the sake of finishing ES6 classes in time, they were deliberately designed to be “maximally minimal”.
      That’s why you can currently only create static methods, getters, and setters, but not static data properties.
      There is a proposal for adding them to the language.
    */

    //  static answer = 42;
    static cool() {
      console.log("cool");
    }
  }

  class Bar extends Foo {
    constructor() {
      console.log(new.target.answer);
    }
  }

  console.log(Foo.answer); // 42
  console.log(Bar.answer); // 42
  var b = new Bar(); // 42
  b.cool(); // "cool"

  console.log(b.answer); // undefined -- `answer` is static on `Foo
})();
