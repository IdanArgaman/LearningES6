
console.log('%c --- Destructing --- ', 'color: blue; font-weight:bold; background-color:orange');

(function () {

    // Destructing an object and array

    function foo() {
        return [1,2,3];
    }

    function bar() {
        return {
            x: 4,
            y: 5,
            z: 6
        };
    }

    // It is looks like an array syntax but it is places as the left operand
    var [ a, b, c ] = foo();

    // Note here: the designators on the left are the object properties returned from the bar function
    // The designators at the right are the variables we create for these properties.

    // We should refer it as (property name) : (variable alias)
    // The 'var' keyword is not required if the variables were defined before
    var { x: h, y: i, z: j } = bar();


    console.log( a, b, c ); // 1 2 3
    console.log( h, i, j ); // 4 5 6

    // Shorten syntax because the object properties is matched to the desired variables
    // Note that using this syntax we ommited the "the x: part"

    var { x, y, z } = bar();

    console.log( x, y, z ); // 4 5 6

    // This can be little confusing

    var aa = 10, bb = 20;

    // o is an object which its x property is assigned to the value of aa (10) and its y property is assigned to the value of bb (20)
    var o = { x: aa, y: bb };

    // We destruct o, we get its x property, which is equal to 10, and assign it to the AA variable,
    // and we get its y property, which is equal to 20, and assign it to the BB variable,
    var { x: AA, y: BB } = o;

    console.log( AA, BB );  // 10, 20


})();

(function () {

    function foo() {
        return [1,2,3];
    }

    function bar() {
        return {
            x: 4,
            y: 5,
            z: 6
        };
    }

    var a, b, c, x, y, z;
    [a,b,c] = foo();

    // Note that using this short syntax without the 'var' keyword is not allowed unless we enclose the statement using angle brackets
    // becuase the 'var' would be considered as declaration

    ( { x, y, z } = bar() ); // We will get 'Uncaught SyntaxError: Unexpected token =' if we omit  the ()

    console.log( a, b, c ); // 1 2 3

    console.log( x, y, z ); // 4 5 6

    // Good example for population empty object literal

    var o = {};

    // Creates the a,b,z properties on the object literal
    [o.a, o.b, o.c] = foo();

    // Creates the x,y,z properties on the object literal
    ( { x: o.x, y: o.y, z: o.z } = bar() );

    console.log( o.a, o.b, o.c ); // 1 2 3
    console.log( o.x, o.y, o.z ); // 4 5 6

    // OBJECT TO ARRAY

    var o1 = { a: 1, b: 2, c: 3 }, a2 = [];

    ( { a: a2[0], b: a2[1], c: a2[2] } = o1 );

    console.log( a2 ); // [1,2,3]


    // ARRAY TO OBJECT

    var a1 = [ 1, 2, 3 ],
    o2 = {};

    [ o2.a, o2.b, o2.c ] = a1;

    console.log( o2.a, o2.b, o2.c ); // 1 2 3

    // REARRANGE


    var a1 = [ 1, 2, 3 ],a2 = [];   // Note that we must decalre a2 variable before using it, the compiler won't be able to guess it type by
                                    // by evaluating the expression next line

    [ a2[2], a2[0], a2[1] ] = a1;   // Great! we destruct the array to its indicies but in a different order

    console.log( a2 );

    // SWAP

    var x = 10, y = 20;

    // The right operand creates an array from x and y variables
    // The left operand destructs the array to y and x -> actually swapping them!
    [ y, x ] = [ x, y ];

    console.log( x, y );

})();
