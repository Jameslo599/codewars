// Is my friend cheating?

const removeNb = (n) => {
  const sum = (n * (n + 1)) / 2;
  let result = [];

  for (let j = Math.ceil(n / 2) + 1; j < n; j++) {
    if (Number.isInteger((sum - j) / (j + 1))) {
      result.push([j, (sum - j) / (j + 1)]);
    }
  }
  return result;
};

//Pseudocode
// function(number) {
//   loop and add all numbers counted and store into variable. also store each
//   number into empty array.

//   loop through number array and within each iteration loop again with a limit
//   of number, multiplying the element by each subsequent element. compare the
//   product to the sum minus the two factors. if it matches then store factors in array
//   then break.

//   return factor array.
// }
