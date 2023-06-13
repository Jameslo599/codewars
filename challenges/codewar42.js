// Playing with digits

function digPow(n, p){
    const k = n.toString().split('').map((e, i) => e ** (i + p)).reduce((acc, curr) => acc + curr);
    return k % n === 0 ? k / n : -1;
  }
  
  //Pseudocode
  // function(desiredNum, startingPower) {
  //   loop through desiredNum and increase startingPower by 1 for each concesecutive iteration
  //   reduce desiredNum
  //   if reducedNum equals or is divides/multiplies into desiredNum then return k, else return -1
  // }