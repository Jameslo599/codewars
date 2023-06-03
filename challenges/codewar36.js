//Take a Ten Minute Walk

function isValidWalk(walk) {
    const limit = walk.length === 10 ? true : false;
    const position = walk.map((e, i) => 
        e === 'n' ? 2
      : e === 's' ? -2 
      : e === 'w' ? 3
      : -3).reduce((acc, value) => acc + value, 0) === 0 ? true : false;
    
    return limit === true && position === true ? true : false
  }