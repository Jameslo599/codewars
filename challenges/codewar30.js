// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((acc, c) => acc + c, 0);
  }