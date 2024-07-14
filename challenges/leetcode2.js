/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reverse = x.toString().split("").reverse().join("");
  return +reverse === x;
};
