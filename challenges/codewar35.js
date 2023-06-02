//Counting Duplicates

function duplicateCount(text){
    let count = 0;
    let dupe = [];
    let arr = text.toLowerCase().split('')
    
    arr.forEach(e => {
        if (!dupe.includes(e) && arr.filter(letter => letter === e).length > 1)
        count++;
        dupe.push(e);
    });

    return count;
};