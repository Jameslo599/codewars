// Mumbling

function accum(s) {
  
	return s.split('').map((e, i) => {
    let acc = e.toUpperCase();
    for (let count = 0; count < i; count++) {
      acc += e.toLowerCase();
    };
    return acc
  }).join('-');
}