//Best travel

const chooseBestSum = (limit, c, arr) => {
  if (arr.length < c) return null;

  let value = 0;
  const result = [];
  backtrack(arr, c, 0, [], result);

  result
    .map((e) => e.reduce((acc, curr) => acc + curr))
    .sort((a, b) => a - b)
    .map((e) => (e > value && e <= limit ? (value = e) : null));

  return value === 0 ? null : value;
};

function backtrack(arr, x, start, current, result) {
  if (current.length === x) {
    result.push([...current]);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    current.push(arr[i]);
    backtrack(arr, x, i + 1, current, result);
    current.pop();
  }
}

// Pseudocode
// function(limit, cities, array) {
//   if array length is less than cities return null.

//   declare empty array and use a for loop with 2 nested loops, each representing
//   their respective element in a 3 element subarray. push each three element
//   combination into empty array and then loop through array, reducing and saving
//   element to a variable, comparing each subsequent element to obtain the closest
//   value to the limit. return closest value.
// }
