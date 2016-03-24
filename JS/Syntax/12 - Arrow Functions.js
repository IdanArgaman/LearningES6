console.log('%c --- Arrow Functions --- ', 'color: blue; font-weight:bold; background-color:orange');

// implicit return

var f1 = () => 12;

console.log(f1());

var a = [1, 2, 3, 4, 5];

a = a.map(v => v * 2);

console.log(a);

/////////////////////
// 'this' handling //
/////////////////////

// The surrounding scope is the scope where the makeRequest method is defined so this refers to the object controller

var controller1 = {
  makeRequest: () => {
    console.log(this);
    this.helper();      // This points to the global scope!!! It lexically inherits this from the surrounding scope!
  },
  helper: () => {}
};

//controller1.makeRequest(); // Fails

// The surrounding scope is the scope where the controller variable is defined so this refers to the window

var controller2 = {
  makeRequest: function () {
    console.log(this);
    this.helper();      // This points to the object literal!!!
  },
  helper: () => {
    console.log("In Helper!");
  }
};

controller2.makeRequest(); // Fails
