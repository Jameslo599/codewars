//Integers: Recreation One

const listSquared = (m, n) => {
    const subArrays = [];
    for (let i = m; i <= n; i++) {
      const divisors = [];
      for (let j = 1; j <= i; j++) {
        if (i % j !== 0 || divisors.find(e => e === i)) continue;
        divisors.push(j**2);
      }
      Math.sqrt(divisors.reduce((a, b) => a + b)) % 1 === 0 ? subArrays.push([i, divisors.reduce((a, b) => a + b)]) : null;
    }
    return subArrays;
  }
  
  //Pseudocode
  
  // function(start, end) {
  //   loop from start to end, calculating the divisors of each number within the range.
  //   square all the divisors and sum them to check if the sum is a squared number. 
  //   if it is then push it to empty array as a subarray else null. 
  // }