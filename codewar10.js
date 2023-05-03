// Square Sum

function squareSum(numbers){
    const result = [];
    numbers.forEach(number => {
      result.push(number**2);
    });
    return result.reduce((acc, current) => acc + current, 0)
  }