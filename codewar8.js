//Sum of Positive

function positiveSum(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num < 0 || arr.length === 0) {
        
      } else {
        sum += num;
      }
    }
    return sum
  }