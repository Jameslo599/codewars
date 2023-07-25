//Math Issues

Math.round = (number) => {
  let result = 0;

  if (number >= 1) {
    const numArr = [];
    result = number.toString().split("");
    for (e of result) {
      if (e === ".") {
        break;
      } else numArr.push(e);
    }

    result = Number(numArr.join(""));
  }

  return number - result < 0.5 ? result : result + 1;
};

Math.ceil = (number) => {
  if (Number.isInteger(number)) return number;
  const numArr = [];
  let result = number.toString().split("");
  for (e of result) {
    if (e === ".") {
      break;
    } else numArr.push(e);
  }
  return Number(numArr.join("")) + 1;
};

Math.floor = (number) => {
  const numArr = [];
  let result = number.toString().split("");
  for (e of result) {
    if (e === ".") {
      break;
    } else numArr.push(e);
  }
  return Number(numArr.join(""));
};

//Pseudocode

// function(number) {
//   for round convert number to string and split it by character. then we map through the array until the decimal.
//   we take the resulting array and join it then convert back to number. we subtract the original number by the new number.
//   if difference is < 0.5 then we return the new number else return new number + 1.
//   then we do the same thing for ceil and floor but without the conditions.
