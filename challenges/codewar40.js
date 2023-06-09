// Your order, please

const order = words => { 
  let result = [];
  words.split(' ').map((e, i) => result[e[e.search(/[1-9]/)] - 1] = e);
  
  return result.join(" ");
}

//Pseudocode

// function(string) {
//   if (empty string) {return empty string}
  
//   string.split into words.execute method on all elements in array.search for numbers 1-9
//   set index of element equal to number obtained.
  
//   return array
// }
