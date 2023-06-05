//Persistent Bugger

function persistence(num) {
    let persistence = 0;
    
    for (let result = num; result >= 10; persistence++) {
      result = result.toString().split('').reduce((acc, curr) => acc * curr, 1);
    }
    
    return persistence;
  }
  
// Pseudo Code

// persistence(39) {
//    let num = 39
//    counter
//    while (num length greater than or equal to 2) {
//      string to array 
//      reduce by multiplying
//      product is new num
//      ounter increment
//    }
//    return persistence
//  }