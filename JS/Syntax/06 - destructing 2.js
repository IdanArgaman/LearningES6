console.log('%c --- Destructing 2 --- ', 'color: blue; font-weight:bold; background-color:orange');
// We declare the base object we want to merge with
var defaults = {
  options: {
    remove: true,
    enable: false,
    instance: {}
  },
  log: {
    warn: true,
    error: true
  }
};

// This object will be merged with the defaults
var config = {
  options: {
    remove: false,
    instance: null
  }
};

console.log('%c defaults:','background-color:orange; color: white; font-weight:bold');
console.dir(defaults);

console.log('%c config:','background-color:orange; color: white; font-weight:bold');
console.dir(config);

// We create a scope to enclose the let expression
// Till now in the book we've use the var keyword
{

  // destructure (with default value assignments)
  // This is a destruction expression. We destruct the 'config' variable
  // Note that the destruction is done with default values

  // If config doesn't contains an 'options' property we use the
  // {} object for destruction, and because that object doesn't contain
  // any poperty the default values will be used for the 'remove','enable','instance'
  // variables. Note that this variables will be created using the 'let' keyword
  // so we can use them inside the enclosing block only.

  // Using this block we create the: 'remove','enable','instance','warn','error' variables
  let {
    options: {
      remove = defaults.options.remove,
      enable = defaults.options.enable,
      instance = defaults.options.instance
    } = {},
    log: {
      warn = defaults.log.warn,
      error = defaults.log.error
    } = {}
  } = config;

  // restructure

  // The config uses the values stored in the varaibles we've created above
  // using the destruction technic
  config = {
    options: { remove, enable, instance },
    log: { warn, error }
  };
}

console.log('%c config after merge:','background-color:orange; color: white; font-weight:bold');
console.dir(config);
