//How many numbers III
const findAll = (sum, d) => {
  //Locate numbers with digits that add to sum
  const solution = [...dig(d)]
    .join(",")
    .split(",")
    .map((e) => e.split("").map((e) => +e))
    .filter((e) => e.reduce((acc, curr) => acc + curr) === sum);

  //If impossible under current arguments
  if (!solution.length) {
    return [];
    //Solution
  } else {
    return [
      solution.length,
      solution[0].join(""),
      solution[solution.length - 1].join(""),
    ];
  }

  //Generate all numbers with ascending or equal digits
  function* dig(d, start = 1, x = "") {
    //Add final digit in number
    if (d === 1) {
      for (let i = start; i <= 9; i++) {
        if (i >= +x.slice(-1)) yield x + i;
      }
      return;
    } else {
      //Construct number
      for (let i = start; i <= 9; i++) {
        x += [i];
        yield [...dig(d - 1, i, x)];
        //Backtrack
        x = x.slice(0, x.length - 1);
      }
    }
  }
};

//Pseudocode
// Honestly this was the hardest kata I've worked on so far. I spent four days trying to figure out a solution before
// I learned about generators and its efficient memory usage. I'm glad I have a new tool in my toolbox!
