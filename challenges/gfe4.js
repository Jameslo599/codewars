/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
export default function fromPairs(pairs) {
  let obj = {};
  for (let i = 0; i < pairs.length; i++) {
    obj[pairs[i][0]] = pairs[i][1];
  }
  return obj;
}
