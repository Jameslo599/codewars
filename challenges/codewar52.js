//Maximum subarray sum

const maxSequence = arr => {
    if (arr.length === 0 || arr.filter(e => e < 0).length === arr.length) return 0;
    if (arr.filter(e => e >= 0).length === arr.length) return arr.reduce((a, b) => a + b);
    
    let currentScore = 0;
    let highScore = 0;
    arr.forEach((e, i) => {
      currentScore += e;
      currentScore < 0 ? currentScore = 0 : null;
      currentScore > highScore ? highScore = currentScore : null;
    })
    return highScore;
  }
  
  //Pseudocode
  
  // function(array) {
  //   if empty array or all negative numbers return 0
    
  //   if all positive numbers then return sum array
    
  //   loop through a sequence of summing the array and saving the value 
  //   if it's greater than the previous iteration's value. then remove the smaller
  //   of the beginning or last element. Loop through array.length - 2 iterations.
  //   return sum of highest array. 
  // }