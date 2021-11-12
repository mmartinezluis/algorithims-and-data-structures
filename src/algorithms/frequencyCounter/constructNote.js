
function constructNote(message, letters){
    let i=0;
    let j=0;
    let reference = new Map();

    if(message.length === 0) return true;
    if(letters.length === 0) return false;
    // if(letters.length > message.length) return false;
    
    for(const letter of letters) {
        if(reference.has(letter)) {
            reference.set(letter, reference.get(letter) + 1);
        } else {
            reference.set(letter, 1);
        }
    }
    
    let minimumLetters = 0;
    for(const [l, count] of reference){
        minimumLetters = minimumLetters + count;
    }
    
    let letterCount;
    
    while(i < message.length && j < minimumLetters) {
        letterCount = reference.get(message[i]);
        if(letterCount > 0) {
            reference.set(message[i], letterCount--);
            i++;
            j++;
        } else {
            i++;
        }
    }
    return j === minimumLetters ? true : false;
}