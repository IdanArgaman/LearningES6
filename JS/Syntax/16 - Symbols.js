console.log('%c --- Symbols --- ', 'color: blue; font-weight:bold; background-color:orange');

function extractValues(str) {
  debugger;

  var key = Symbol.for("extractValues.parse"),
    re = extractValues[key] ||
    /[^=&]+?=([^&]+?)(?=&|$)/g,
    values = [],
    match;

  while (match = re.exec(str)) {
    values.push(match[1]);
  }
  return values;
}
