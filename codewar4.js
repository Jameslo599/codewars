// Reversed Strings

function solution(str){
    const array = []
    for (let i = 0; i < str.length; i++) {
      const extract = str.split("");
      array[i] = extract[i]
    };
    return array.reverse().join('')
  }