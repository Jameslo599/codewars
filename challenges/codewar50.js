//Rot13

const rot13 = message => {
    return message.split('').map((e, i) => {
      
      if (message.charCodeAt(i) >= 65 && 
          message.charCodeAt(i) <= 90) {
        const shiftedNum = message.charCodeAt(i) + 13;
        return shiftedNum > 90 ?  
          String.fromCharCode(shiftedNum - 26) : String.fromCharCode(shiftedNum);
        
      } else if (message.charCodeAt(i) >= 97 && 
                 message.charCodeAt(i) <= 122) {
        
        const shiftedNum = message.charCodeAt(i) + 13;
        return shiftedNum > 122 ?  
          String.fromCharCode(shiftedNum - 26) : String.fromCharCode(shiftedNum);
        
      } else return e
    }).join('');
  }
  
  //Examples rot13('abcd') => 'nopq'
  
  //Pseudocode
  
  // function(string) {
  //   split string by letters and then loop through array.
  //   if element is number or special character then ignore
  //   if element is letter then get charcode and add 13
  //   if sum is higher than charcode of z/Z then subtract the sum by 26
  //   to loop around. 
  //   return joined array.
  // }