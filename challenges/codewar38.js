// Unique In Order

const uniqueInOrder = iterable => {
    let result = [];
    !Array.isArray(iterable) ? iterable = iterable.split('') : null;
    iterable.forEach((e, i) => iterable[i] !== iterable[i - 1] ? result.push(e) : null);
    return result;
}
  
//Pseudo Code

// take in either string or array
// returns array of elements with consecutive duplicates removed

// function(iterable) {
//   result = [];
//   iterable is array? if not then iterable.split('');
//   loop through iterable and check if result[i-1] is equal to iterable[i];
//   return result;
// }