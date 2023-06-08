// Detect Pangram

function isPangram(string){
    let result = true;
    for (let i = 97; i <= 122; i++) {
      !string.toLowerCase().includes(String.fromCharCode(i)) ? result = false : null;
    }
    return result;
  }
  
  //Pseudocode
  
  // char code a-z = 97-122;
  // function(string) {
  //   result = true
    
  //   loop {
  //     string.match(charcode(i)) ? null : false;
  //   }
    
  //   return result
  // }