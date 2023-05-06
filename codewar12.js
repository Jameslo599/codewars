//Remove String Spaces

function noSpace(x){
    return x.split(" ").filter(char => char !== "").join("");
  }