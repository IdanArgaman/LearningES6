console.log('%c --- Spread and Rest --- ', 'color: blue; font-weight:bold; background-color:orange');

(function () {

    console.log("Spread/Rest");
    
    ////////////
    // SPREAD //
    ////////////

    function foo(x, y, z)
    {
        console.log(x, y, z);
    }

    // Before an existing array, the ... operator destructs it to values!
    foo(...[1, 2, 3]);

    // Spread into another array

    var a = [2, 3, 4];

    var b = [1, ...a, 5];

    console.log(b);

    // Prior ES6
    console.log([1].concat(a, [5]));

    //////////
    // REST //
    //////////

    // Rest collects the function arguments into an array

    function bar(x, y, ...z) {
        console.log(x, y, z);
    }

    bar(1, 2, 3, 4, 5);

    // Rest is different from the old 'arguments' variable inside a function because rest is a real array
    // unlike 'arguments' which is an array like object



})();


