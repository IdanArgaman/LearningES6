console.log('%c --- Object Extensions --- ', 'color: blue; font-weight:bold; background-color:orange');

/* Computed property names */

var prefix= "user_";

var o      = {
  baz: function( ) { },
  // We can have a computed proerty name directly inside the object literal
  [ prefix + "foo" ]: function( ) { console.log(prefix + "foo" );},
  [ prefix + "bar" ]: function( ) { console.log(prefix + "bar");},

  // Even in concise method
  [ prefix + "test"]() {
    console.log(prefix + "test");
  }
};

o[prefix + "foo"]();
o[prefix + "bar"]();
o[prefix + "test"]();
