//Primes in numbers

const primeFactors = n => {
    const primes = {};
    let i = 2;
    while (n !== 1) {
      while (n % i === 0) {
        n /= i;
        !primes[i] ? primes[i] = 1 : primes[i]++;
      };
      i++
    };
    
    const arr = [];
    for (number in primes) {
      primes[number] > 1 ? arr.push(`(${number}**${primes[number]})`) 
      : arr.push(`(${number})`) 
    }
    
    return arr.join('')
  }
  
  //Pseudocode
  
  // function(number) {
  //   create an object of first 9 prime numbers.
  //   loop number with condition that number divided by prime number has a remainder
  //   of 0. With each iteration we save the new number value and increment the prime
  //   number counter by 1. If not 0 then stop and move to next prime number in array.
    
  // }
  