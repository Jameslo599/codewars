//Break camel case

// complete the function
const solution = string => {
    let arr = string.split('');
    
    for (let i = 0; i < arr.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        arr.splice(i, 0, ' ');
        string = arr.join('');
        i++;
      }
    }
    return arr.join('')
    
  }
  
  // Pseudocode
  // function(string) {
  //   convert string into array and then loop through each element
  //   for each element we find the charcode at that index and if the code is
  //   between 65-90 then we splice a space at that index. Then we join the 
  //   array and return it.
  // }