
console.log('%c --- Default Values --- ', 'color: blue; font-weight:bold; background-color:orange');

(function () {

    console.log("Default Values");

    // OLD PATTERN

    function foo(x, y) {
        x = x || 11;            // Checking for falsy value this way is a bit dangerous, becuase 0 is falsy in JS
        y = y || 31;
        console.log(x + y);
    }

    foo(); // 42
    foo(5, 6); // 11
    foo(5); // 36
    foo(null, 6); // 17

    console.log("NOTE foo(0):");

    foo(0);

    // MORE OLD TRICKS

    function foo1(x, y) {
        x = (0 in arguments) ? x : 11;
        y = (1 in arguments) ? y : 31;
        console.log(x + y);
    }
    foo1(5); // 36
    foo1(5, undefined); // NaN - becuase we've passsed a value in the arguments. The value is just falsy

    // ES6 WAY

    // WORKS ON CHROME 49+

    console.log("ES6");

    function test(x = 11, y = 31) {
        console.log( x + y );
    }

        test(); // 42
        test( 5, 6 ); // 11
        test( 0, 42 ); // 42
        test( 5 ); // 36
        test( 5, undefined ); // 36 <-- `undefined` is missing
        test( 5, null ); // 5 <-- null coerces to `0`
        test( undefined, 6 ); // 17 <-- `undefined` is missing
        test( null, 6 ); // 6 <-- null coerces to `0

        // DEFAULT PARAMETERS AS FUNCTIONS

        //////////////////////////////////////////////////////////
        // The default value expressions are lazily evaluated,  //
        // meaning they're  only run if and when they're needed //
        //////////////////////////////////////////////////////////

        function bar1(val) {
            console.log( "bar called!" );
            return y + val;
        }

        function foo2(x = y + 3, z = bar1( x )) {
            console.log( x, z );
        }

        var y = 5;
        foo2(); // "bar called" // 8 13


        foo2( 10 ); // "bar called"  // 10 15 - We have provided a value for 'x' so the 'y+3' expression won't be used

        y = 6;
        foo2( undefined, 10 ); // 9 10 - Note that we've provided a value for z so the 'bar' expression won't be called

        // TDZ

        /////////////////////////////////////////////////////////////////////////////////////////////
        // ES6 has a TDZ which prevents a variable from being accessed in its uninitialized state! //
        /////////////////////////////////////////////////////////////////////////////////////////////

        // A reference to an identifier in a default value expression first matches the formal parameters’ scope
        // before looking to an outer scope

        /*
        var w = 1, z = 2;

        function foo( x = w + 1, y = x + 1, z = z + 1) {   // 'z' is the problem it is used before it gets defined, 'w' is defined in the outer scope so no problem
            console.log( x, y, z );
        }

        foo();
        */

        // Default value as IIFE
        console.log('Default value as IIFE');

        function com( x = (function(v){ return v + 11; })( 31 )) {
            console.log( x );
        }

        com(); // 42

        // Default callback value

        function ajax(url, cb = function(){ console.log('no impl'); }) {
            cb();
        }
        ajax("http://some.url.1");

        // OR

        function ajax(url, cb = Function.prototype) {
           cb();
        }
        ajax("http://some.url.1");
})();
