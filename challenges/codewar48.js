//Build Tower

const towerBuilder = nFloors => {
    const arr = [];
    
    for (let i = 0; i < nFloors; i++) {
      let floor = '*';
      arr.push(floor += floor.repeat(i * 2));
    }
    
    return arr.map((e, i) => {
      return e.padStart((arr[arr.length - 1].length - e.length) / 2 + e.length).padEnd(arr[arr.length - 1].length);
    })
  }
  
  // Pseudocode
  
  // function(number of floors) {
  //   loop through equal to the number of floors. The formula for constructing a tower is
  //   floor = '*' and every iteration we do floor += '**'.
    
  //   return array
  // }