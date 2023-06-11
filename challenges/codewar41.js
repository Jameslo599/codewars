//Tribonnaci Sequence

function tribonacci(signature,n){
    if (!n) return [];
    if (n < 3) return signature.slice(0, n);
    
    for (let i = 0; i < -3 + n; i++) {
      signature.push(signature.slice().reverse().slice(0, 3).reduce((acc, curr) => acc + curr));
    }
    return signature; 
  }
  
  //Pseudocode
  // function(array, length) {
  //   if (!n) {return};
    
  //   for (let i = 0; i <= n - 4; i++) {
  //     array.push(array.reverse().slice(0, 3).reduce((acc, curr) => acc + curr, 0));
  //   }
  //   return array; 
  // }