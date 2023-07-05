//Sum of Pairs

const sumPairs = (ints, s) => {
  const filtered = [];
  const prevNums = [];
  const pair = [[0, 0, 10000]];

  ints.map((e, i) => {
    filtered.filter((ele) => ele === e).length <= 2 ? filtered.push(e) : null;
  });

  for (let i = 0; i < filtered.length; i++) {
    if (i === pair[0][2]) break;
    if (prevNums.includes(filtered[i])) continue;
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[i] + filtered[j] === s && j < pair[0][2]) {
        pair.splice(0, 1, [filtered[i], filtered[j], j]);
        break;
      }
    }
    prevNums.push(filtered[i]);
  }

  return pair[0][2] !== 10000 ? pair.flat().slice(0, 2) : undefined;
};

//Pseudocode

// function(array, sum) {
//   create an empty array to hold pairs that equal the sum. loop through array
//   with a nested loop that checks the sum of that element combined with each other element
//   in the array. when a pair equals the sum push it to the empty array. if the number
//   has already been tested then skip that iteration.

//   to find the pair with lowest index for second element, we will push the element
//   along with its index number to the empty array and then perform comparisons
//   upon each subsequent pair that adds up to the desired sum. if the pair has a lower
//   index then we replace the current pair.

//   if there are no pairs that can be added then we return undefined.
// }
