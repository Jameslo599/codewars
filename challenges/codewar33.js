// Find the Odd Int

function findOdd(A) {
    let odd;
    A.map((e, i) => A.filter(e => e === A[i]).length % 2 === 0 ? '' : odd = e)
    return odd;
  }