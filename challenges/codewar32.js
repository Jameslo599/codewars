//Duplicate Encoder

function duplicateEncode(word){
    word = word.toLowerCase();
    return word.split('').map((e, i) => word.split('').filter(e => e === word[i]).length >= 2 ? ')' : '(').join('');
}
