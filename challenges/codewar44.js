//Equal Sides of an Array

function findEvenIndex(arr) {
  let result = [];
  arr.forEach((e, i) => {
    const num1 = i === 0 ? 0 : arr.slice(0, i).reduce((acc, curr) => acc + curr);
    const num2 = i === arr.length - 1 ? 0 : arr.slice(i + 1).reduce((acc, curr) => acc + curr);
    num1 === num2 ? result.push(i) : null;
  });
  return result.length == 0 ? -1 : result[0];
}

//Pseudocode
// function(array) {
//   loop through each element of array and for each element we slice the array
//   from index 0 to i, and slice from i + 1 to the end. we take both sliced arrays
//   and reduce both and compare both values. if they are equal return i, else return -1;
// }