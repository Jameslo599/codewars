//Differentiate polynomials
const differentiate = (equation, point) => {
  let diff = removeSign(equation);
  diff = differ(diff);
  diff = evaluate(diff, point);
  return diff.reduce((acc, curr) => acc + curr);
};

//Split equation by + and -
function removeSign(str) {
  const noPlus = str.split("+");
  let complete = [];
  for (let i = 0; i < noPlus.length; i++) {
    //If element includes leading - sign and other -
    if (noPlus[i][0] === "-" && str.slice(1).includes("-")) {
      const split = noPlus[i].split("-");
      split[0] = "-" + split[0];
      complete = complete.concat(split);
      noPlus.splice(i, 1, "0");
      //If element does not include leading - but has other -
    } else if (noPlus[i][0] !== "-" && str.includes("-")) {
      const split = noPlus[i].split("-");
      split[0] = "+" + split[0];
      complete = complete.concat(split);
      noPlus.splice(i, 1, "0");
    }
  }
  //Readd negative signs
  complete = complete.map((e, i) => (i === 0 || e.includes("+") ? e : "-" + e));
  //Remove placeholder +
  complete = complete.map((e, i) => (e.includes("+") ? e.slice(1) : e));
  return noPlus.concat(complete);
}

//Multiply coefficients by exponent value and subtract exponent by 1
function differ(arr) {
  const product = arr.map((e) => {
    if (e.indexOf("x") === -1) return 0;
    let coeff = e.slice(0, e.indexOf("x")) || 1;
    coeff === "-" ? (coeff = -1) : null;
    let exp;
    e.indexOf("^") === -1
      ? (exp = 1)
      : (exp = Number(e.slice(e.indexOf("^") + 1)));
    return `${Number(coeff) * exp}x^${exp - 1}`;
  });
  return product;
}

//Plug in point value and evaluate
function evaluate(arr, num) {
  const product = arr.map((e) => {
    if (!e) return 0;
    const coeff = Number(e.slice(0, e.indexOf("x")));
    let exp = Number(e.slice(e.indexOf("^") + 1));
    return num ** exp * coeff;
  });
  return product;
}

//Pseudocode

// Seperate the string by + and -
// Multiply coefficient of each variable by its exponent value
// Subtract exponent value by 1
// Plug in the point and then evaluate
// Return result
