/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  if (")]}".includes(s[0]) || "([{".includes(s[s.length - 1])) return false;

  const key = "()[]{}";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if ("([{".includes(s[i])) {
      stack.unshift(s[i]);
      continue;
    }
    key.includes(stack[0] + s[i]) ? stack.shift() : stack.push(s[i]);
  }
  return !stack.length ? true : false;
};
