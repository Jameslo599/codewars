// Disemvowel Trolls

function disemvowel(str) {
    const split = str.split('');
    for (let i = 0; i < split.length; i++) {
      split[i] === 'a' || split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u' 
      || split[i] === 'A' || split[i] === 'E' || split[i] === 'I' || split[i] === 'O' || split[i] === 'U' ? delete split[i] : ''
    }
    return split.join('');
  }