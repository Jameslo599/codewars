//Unique string
const findUniq = (arr) => {
  let letters = [];
  // collect all unique letters
  arr
    .join("")
    .toLowerCase()
    .split("")
    .forEach((e) => (!letters.includes(e) ? letters.push(e) : null));
  // sieve to find which unique letter is contained in only one element
  letters.forEach((e) =>
    arr.filter((ele) => ele.includes(e)).length === 1
      ? (letters = arr.filter((ele) => ele.includes(e)))
      : null
  );

  return letters.join("");
};

//Pseudocode

// join the array together, make letters lowercase and then split the
// array into individual letters. Loop through the array comparing letters
// to find the unique letter. Then loop through original array to find
// which element includes the unique letter and return that string.
