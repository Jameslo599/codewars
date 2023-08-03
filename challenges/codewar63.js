//Factorial decomposition

const decomp = (n) => {
  const primes = sieve(n);
  let value = 0;
  const result = sieve(n);

  simplify(primes, n, value, result);

  const final = primes.map((e, i) =>
    result.filter((num) => num === e).length > 1
      ? `${e}^${result.filter((num) => num === e).length}`
      : `${e}`
  );

  return final.join(" * ");
};

function sieve(limit) {
  const bools = [];
  const primes = [];

  for (let i = 1; i < limit; i++) {
    bools.push(true);
  }

  for (let i = 2; i < limit; i++) {
    if (bools[i - 2]) {
      for (j = i * 2; j <= limit; j += i) {
        bools[j - 2] = false;
      }
    }
  }

  for (let i = 0; i < bools.length; i++) {
    bools[i] === true ? primes.push(i + 2) : null;
  }
  return primes;
}

function simplify(arr, n, value, result) {
  if (arr.includes(value)) {
    result.push(value);

    return;
  } else if (value > 0) {
    for (let j = 0; j < arr.length; j++) {
      if (value % arr[j] === 0) {
        result.push(arr[j]);
        simplify(arr, n, value / arr[j], result);
        break;
      }
    }
    return;
  }

  for (let i = 2; i <= n; i++) {
    if (!arr.includes(i)) {
      for (let j = 0; j < arr.length; j++) {
        if (i % arr[j] === 0) {
          result.push(arr[j]);
          simplify(arr, n, i / arr[j], result);
          break;
        }
      }
    }
  }
}

//Pseudocode

// function(number) {
//   loop and save accumulated product of number - i in each iteration.
//   Then we use another for loop and start dividing by prime numbers until the quotient becomes 1.
//   Use conditional to check each division to ensure a whole number, else switch to next prime number.
//   When quotient is not a whole number, push the prime number with its exponent to an empty array.
//   return string.
// }
