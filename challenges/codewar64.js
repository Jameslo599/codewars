// Common Denominator

const convertFrac = (lst) => {
  let denom = lst.map((e) => e[1]).sort((a, b) => b - a);
  let count = 0;
  const arr = [];

  for (let i = 1; count <= 3; i++) {
    for (let j = 0; j < denom.length; j++) {
      if ((denom[0] * i) % denom[j] === 0) {
        count++;
        continue;
      }
      count = 0;
      break;
    }
    if (count === denom.length) {
      denom = denom[0] * i;
      break;
    }
  }
  lst.forEach((e) => {
    const quotient = denom / e[1];
    const numerator = e[0] * quotient;
    arr.push(`(${numerator},${denom})`);
  });
  return arr.join("");
};

// Pseudocode
// make a list of all denominators and sort them from greatest to least
// loop through multiples of the largest denominator until you find number
// that is divisible by all other denominators.

// loop through and divide the common denominator with each fraction's denominator
// and use the quotient to multiply with the numerator and the product will replace
// numerator and common denominator will replace denominator. store values as a
// string with parentheses and numbers seperated by comma into an array.
