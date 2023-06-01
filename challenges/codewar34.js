//Arr.diff

function arrayDiff(a, b) {
    let result = a;
    for (e of b) {
      result = result.filter(num => num !== e);
    }
  
    return result
  }