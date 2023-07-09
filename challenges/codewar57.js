//Gap in Primes

const gap = (g, m, n) => {
  let primes = [];
  let result = null;
  for (let i = m; i <= n; i++) {
    let prime;
    if (i === 2 || i === 3 || i <= 1 || i % 2 === 0 || i % 3 === 0) continue;
    for (let j = 5; j * j <= i; j += 2) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    prime !== false ? primes.push(i) : null;
  }

  for (let i = 0; i < primes.length - 1; i++) {
    if (primes[i + 1] - primes[i] === g) {
      return (result = [primes[i], primes[i + 1]]);
    }
  }

  return result;
};

//Pseudocode

// function(gap, start, end) {
//   create an array by looping from start to end numbers, pushing prime
//   numbers into empty array. from the empty array we use loop through and
//   subtract each element from the element succeeding it and compare the difference
//   to gap. if condition is satisfied then we end loop and return array of the
//   two numbers.
// }
