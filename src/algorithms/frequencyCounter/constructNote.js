function constructNote(message, letters){
    let i=0;
    let reference = new Map();

    if(message.length === 0) return true;
    if(letters.length === 0) return false;
    
    for(const letter of letters) {
        if(reference.has(letter)) {
            reference.set(letter, reference.get(letter) + 1);
        } else {
            reference.set(letter, 1);
        }
    }
        
    let letterCount;
    while(i < message.length) {
        let letter = message[i];
        letterCount = reference.get(letter);
        if(letterCount) {
            reference.set(letter, letterCount- 1);
            if(reference[letter] < 0) return false;
            i++;
        } else {
            return false;
        }
    }
    return true;
}