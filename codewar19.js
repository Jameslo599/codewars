// Highest and Lowest

function highAndLow(numbers){
    const arr = numbers.split(' ').sort((a, b) => a - b);
    if (arr.length === 1) {
      arr.splice(1, 0, arr[0]);
    } else {arr.splice(1, arr.length - 2);}
    return arr.reverse().join(' ')
  }