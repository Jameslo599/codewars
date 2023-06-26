//Highest Scoring Word
const high = x => {
    let topScore = 0;
    
    const scoreArr = x.split(' ').map((e, i) => {
      let codeArr = [];
      
      for (let i = 0; i < e.length; i++) {
        codeArr.push(e.charCodeAt(i) - 96);
      };
      
      codeArr = codeArr.reduce((acc, curr) => acc + curr);
      codeArr > topScore ? topScore = codeArr : null;
      return codeArr;
    });
    
    return x.split(' ')[scoreArr.findIndex(e => e === topScore)];
  }
  
  //Pseudocode
  
  // function(string) {
  //   split the string by spaces then we map through the array. in each element
  //   we need to loop through the string i < element.length and push each letter's charcode
  //   subtracted by 96 into an empty array. We also store this value into a variable and we check
  //   against this with each subsequent element and reassign the variable if value is larger.
  //   Then we return the reduced array as a number. 
    
  //   Then we find the first instance of this score and use that index number to return
  //   the string in the initial split up array.
  // }