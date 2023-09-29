//Pentagonal numbers
const pNum = new Map();
const part = new Map();
part.set(0, 1);
//Calculate only unique pentagonals
let sign = 0;
const calcPentagonals = (num) => {
  for (let i = 1; i <= num; i++) {
    if (pNum.has(num)) break;
    if (pNum.has(i)) continue;
    if (sign === 0) {
      pNum.set(i, (3 * i ** 2 - i) / 2);
      pNum.set(i + 0.5, (3 * (-i) ** 2 - -i) / 2);
      sign = 1;
    } else {
      pNum.set(i, -(3 * i ** 2 - i) / 2);
      pNum.set(i + 0.5, -(3 * (-i) ** 2 - -i) / 2);
      sign = 0;
    }
  }
};
//Calculate only unique partitions
const calcPartitions = (num) => {
  for (let i = 1; i <= num; i++) {
    if (part.has(num)) break;
    if (part.has(i)) continue;
    //Sum p(n)=p(n−1)+p(n−2)−p(n−5)−p(n−7)+p(n−12)+p(n−15)−…
    let total = 0;
    for (let j = 1; i >= Math.abs(pNum.get(j)); j += 0.5) {
      //Sign change
      if (pNum.get(j) < 0) {
        total -= part.get(i - Math.abs(pNum.get(j)));
      } else {
        total += part.get(i - Math.abs(pNum.get(j)));
      }
    }

    part.set(i, total);
  }
};
//Return number of partitions
const returnPart = (num) => {
  calcPentagonals(num);
  calcPartitions(num);
  return part.get(num);
};

//Pseudocode

// This will require complex functions so memoization must be utilized.
// Based on Euler's number theorem we will use a formula such as:
// p(n)=p(n−1)+p(n−2)−p(n−5)−p(n−7)+p(n−12)+p(n−15)−… to calculate number of
// partitions. We cannot hard code the numbers in the formula so we dynamically
// calculate them with this formula p = (3n^2 - n)/2. We will cache the results
// of latter formula so we only have to run this calculation once.
