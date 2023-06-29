//Directions Reduction

const dirReduc = arr => {
    let filterOut;
    
    for (let t = 0; t < 3; t++ ) {
      filterOut = arr.map((e, i) => {
      switch (e) {
          
          case 'NORTH':
            if (arr[i + 1] === 'SOUTH') {
              arr[i + 1] = ' ';
              return ' ';
            }
            return e;
          
          case 'SOUTH':
            if (arr[i + 1] === 'NORTH') {
              arr[i + 1] = ' ';
              return ' ';
            }
            return e;
          
          case 'EAST':
            if (arr[i + 1] === 'WEST') {
              arr[i + 1] = ' ';
              return ' ';
            }
            return e;
          
          case 'WEST':
            if (arr[i + 1] === 'EAST') {
              arr[i + 1] = ' ';
              return ' ';
            }
            return e;
          
          default:
            return e;
        }
      }).filter(e => e !== ' ');
      arr = filterOut;
    }
    return filterOut
  }
  
  //Pseudocode
  
  // function(string) {
  //   loop through the array and use a switch statement with cases including
  //     each cardinal direction. Check if North is next to south or east is next to west.
  //     If they are then return empty space else ignore. Once initial loop is over, join 
  //     array by spaces and then split by spaces. Run loop again to search for any additional
  //     combinations. return array.