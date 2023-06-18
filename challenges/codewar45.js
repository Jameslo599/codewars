//Are they the "same"?

const comp = (array1, array2) => {
  if (array1 === null || array2 === null) return false;
  
  if (array1.length === 0 && array2.length === 0) return true;
  
  return array2.map(e => Math.sqrt(e)).reduce((acc, curr) => acc + curr) ===
    array1.reduce((acc, curr) => acc + curr) ? true : false;
}

// Pseudocode
// function(baseArray, squaredArray) {
//   if either array is empty or null, return false
  
//   map through a2 the square root of each element and then compare to a1
//   if the same then return true else false
// }