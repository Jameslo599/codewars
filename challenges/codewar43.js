// Find the unique number

const findUniq = arr => {
    let result;
    arr.forEach(e => arr.indexOf(e) === arr.lastIndexOf(e) ? result = e : null)
    return result
  }
  
  //Pseudocode 
  // function(array) {
  //   test each array element if it is unique so we filter and check the length. 
  //   if length is equal to 1 then we return it.
    
  // }