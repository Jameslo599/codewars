// Vowel Count 

function getCount(str) {
    let acc = 0;
    str.split('').forEach(l => l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u' ? acc++ : '')
    return acc;
  }