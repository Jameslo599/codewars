/**
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
export default function findIndex(array, predicate, fromIndex = 0) {
  if (fromIndex < 0) fromIndex = array.length + fromIndex;
  let index;
  for (let i = fromIndex; i < array.length; i++) {
    if (predicate(array[i])) {
      return (index = i);
    }
  }
  return index ? index : -1;
}
