
//----------------------
//  Export
//-------------------

module.exports = function(value, default_value) {
  if (typeof value === 'undefined' || value === null) {
    return (default_value === undefined) ? false : (/^1|true$/i).test('' + default_value);
  } else {
    return (/^1|true$/i).test('' + value); // avoid the boolean/truthy ghetto
  }
};
