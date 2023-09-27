//Mixed Strings
const mix = (s1, s2) => {
  const s1Arr = [];
  const s2Arr = [];
  //Tally s1 letters
  for (let i = 97; i <= 122; i++) {
    let count = ":";
    for (const ele of s1.split("")) {
      if (!s1.split("").includes(ele)) continue;
      if (ele === String.fromCharCode(i)) count += ele;
    }
    if (count.length > 2) s1Arr.push(`1${count}`);
  }
  //Tally s2 letters
  for (let i = 97; i <= 122; i++) {
    let count = ":";
    for (const ele of s2.split("")) {
      if (!s2.split("").includes(ele)) continue;
      if (ele === String.fromCharCode(i)) count += ele;
    }
    if (count.length > 2) s2Arr.push(`2${count}`);
  }
  //Filter unique s2 letters
  const s1String = s1Arr.join("");
  for (let i = 0; i < s2Arr.length; i++) {
    if (!s1String.includes(s2Arr[i][2])) {
      s1Arr.push(s2Arr[i]);
      s2Arr.splice(i, 1);
      i--;
    }
  }
  //Compare remaining letters
  for (let i = 0; i < s1Arr.length; i++) {
    for (const ele of s2Arr) {
      if (s1Arr[i][2] !== ele[2]) continue;
      if (s1Arr[i].length > ele.length) {
        break;
      } else if (s1Arr[i].length < ele.length) {
        s1Arr[i] = ele;
        break;
      }
      s1Arr[i] = s1Arr[i].replace(1, "=");
    }
  }
  /* Sort by decreasing order of length and ascending
    lexicographic order if same length */
  const sortedArr = s1Arr
    .sort((a, b) => {
      if (a.length === b.length) {
        return a.charCodeAt(0) - b.charCodeAt(0);
      }
      return a.length > b.length ? -1 : 1;
    })
    .join("/");

  return sortedArr;
};

//Pseudocode

// loop through s1 and s2, counting number of iterations of each lower case letter
// and storing them into an array. loop through first array and compare each element
// to its respective element in s2 and if s2 is greater then replace, if equal then
// use an = symbol. return string.
