//Simplifying multilinear polynomials
const simplify = (poly) => {
  let simple = seperate(poly);
  simple = group(simple);
  simple = calc(simple);
  console.log(simple);
  simple = sortArr(simple);
  simple = addSigns(simple);
  return simple;
};

//Split string by + and -
function seperate(arr) {
  let simple;
  if (arr.includes("+")) {
    simple = arr.split("+");
    simple.forEach((e, i) => {
      if (e.includes("-")) {
        simple.splice(i, 1, "");
        simple = simple.concat(
          e.split("-").map((e, i) => (i === 0 ? e : "-" + e))
        );
      } else e;
    });
  } else {
    //If no +
    arr[0] === "-"
      ? (simple = arr
          .slice(1)
          .split("-")
          .map((e) => "-" + e))
      : (simple = arr.split("-").map((e, i) => (i === 0 ? e : "-" + e)));
  }
  return simple;
}

//Group signs and numbers vs. letters
function group(arr) {
  return arr.map((e) => {
    const num = [];
    const letter = [];
    for (let i = 0; i < e.length; i++) {
      if (e[i] === "-" || Number(e[i]) || e[i] === "0") {
        num.push(e[i]);
      } else letter.push(e[i]);
    }
    //Sort here to avoid sorting the numbers
    return [num.join(""), letter.sort().join("")];
  });
}

//Add/substract similar variables and rejoin subarrays
function calc(arr, result = [], i = 0) {
  //Exit after last element
  if (!arr[i]) {
    console.log(result);
    return result
      .filter((e) => e[1])
      .map((e) => {
        if (e[0] === "" || e[0] === 1 || e[0] === "1") return e[1];
        if (e[0] === "-1" || e[0] === -1) return `-${e[1]}`;
        if (e[0] === 0 || e[0] === "-0") return "";
        return e.join("");
      })
      .filter((e) => e !== "");
  }
  //Iterate if variable already exists
  if ([].concat(...result).includes(arr[i][1])) {
    i++;
    return calc(arr, result, i);
  }
  //Add and iterate if variable is unique
  if (arr.filter((e) => e[1] === arr[i][1]).length === 1) {
    result.push(arr[i]);
    i++;
    return calc(arr, result, i);
  }
  //Add variable and calculate total
  const filtered = arr.filter((e) => e[1] === arr[i][1]);
  let sum = 0;
  for (const ele of filtered) {
    if (ele[0] === "-") ele[0] = -1;
    if (!ele[0]) ele[0] = 1;
    sum += Number(ele[0]);
  }
  result.push([sum, filtered[0][1]]);
  i++;
  return calc(arr, result, i);
}

//Sort array by lexicographic and number of variables
function sortArr(arr) {
  return arr.sort((a, b) => {
    let i = 0;
    let aSum = 0,
      bSum = 0;
    while (i < a.length) {
      if (a[i] === "-" || Number(a[i])) {
        i++;
        continue;
      }
      aSum += a.charCodeAt(i);
      i++;
    }
    let j = 0;
    while (j < b.length) {
      if (b[j] === "-" || Number(b[j])) {
        j++;
        continue;
      }
      bSum += b.charCodeAt(j);
      j++;
    }
    return aSum - bSum;
  });
}
//Reintroduce plus/minus signs
function addSigns(arr) {
  arr = arr.join("+");
  while (arr.includes("+-")) {
    arr = arr.replace("+-", "-");
  }
  return arr;
}

//Pseudocode

// Split string by '+' and then loop through result and split by '-' if
//   '-' is not in 0th position. For simplicity we will sort all individual array
//  elements by lexicographic order followed by sorting the entire array by increasing
//  number of variables and then lexicographic order if number of variables are
//  the same.

// For adding/subtracting similar variables, we loop through the array and for each
// element we loop again and make two arrays: one w/wo negative signs and numbers
// and another with just the variable. We then compare the second array against
// our master array to check if there are any with the same variable and then add/
// subtract their numbers.
