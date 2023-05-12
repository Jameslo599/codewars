// Square Digits

function squareDigits(num){
    return +`${num}`.split('').map(e => (+e)**2).join('');
  }