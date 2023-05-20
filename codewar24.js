// Isograms

function isIsogram(str){
    let result = true;
    const lowerString = str.toLowerCase();
    
    for (i = 0; i < str.length; i++) {
      let duplicate = 0
      
      for (j = 0; j < str.length; j++) {
        lowerString.charAt(i) === lowerString.charAt(j) ? duplicate++ : null;
      };
      
      duplicate >= 2 ? result = false : null;
    };
    return result
  }