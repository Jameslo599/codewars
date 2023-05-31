//String Repeat

function repeatStr (n, s) {
    let accum = "";
    for(let i = 0; i < n; i++) {
      accum = accum += s;
    };
    return accum;
  }