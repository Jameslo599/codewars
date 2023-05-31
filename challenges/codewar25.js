// Exes and Ohs

function XO(str) {
    let x = 0;
    let o = 0;
  
    str.toLowerCase().split('').forEach(e => {if (e === "x") {
      x++;
    } else if (e === "o") {
      o++;
    }});
    
    return x !== o ? false : true
  }