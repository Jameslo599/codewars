//Sort the odd

const sortArray = array => {
    const result = array.filter(e => e % 2 !== 0).sort((a, b) => a - b);
    array.forEach((e, i) => e % 2 === 0 ? result.splice(i, 0, e) : null);
    return result;
  }