/**
 * This function returns the index of the last element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
export default function findLastIndex(
  array,
  predicate,
  fromIndex = array.length - 1
) {
  if (fromIndex < 0 && Math.abs(fromIndex) > array.length) fromIndex = 0;
  if (fromIndex < 0) fromIndex = array.length + fromIndex;
  if (fromIndex >= array.length) fromIndex = array.length - 1;

  let index;
  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i])) return (index = i);
  }

  return index ? index : -1;
}
