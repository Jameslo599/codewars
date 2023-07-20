//Perfect power

const isPP = (n) => {
  let result = null;

  for (let i = 2; i < 20; i++) {
    let b = Math.round(Math.pow(n, 1 / i));

    if (Math.pow(b, i) === n) {
      result = [b, i];
      break;
    }
  }
  return result;
};

// Psuedocode
// function(number) {
//   if number divisible by 2, 3, 5 or 7? if so, return null;

//   use Math.pow(number, 1/i) where i is the iteration number in the loop.
//   after each iteration we check if result is a whole number. if it is then store
//   result and i, then break.
// }
