console.log('%c --- Object Super --- ', 'color: blue; font-weight:bold; background-color:orange');

var o1 = {
  foo() {
    console.log("o1:foo");
  }
};
var o2 = {
  foo() {
    // Calling the protoytype implementation
    // In previous versions of JS we needed to use 'ParentClass.prototype.myMethod.call(this)'

    //super is only allowed in concise methods, not regular function expression properties

    super.foo();
    console.log("o2:foo");
  }
};

// Setting the prototype of an object using a new method
Object.setPrototypeOf(o2, o1);
o2.foo();
