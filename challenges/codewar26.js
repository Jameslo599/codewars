// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.split(' ').map(e => e = e.charAt(0).toUpperCase() + e.substring(1)).join(' ');
};