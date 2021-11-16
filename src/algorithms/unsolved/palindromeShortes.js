function shortestPalindrome(s) {
    let pivot;
    let left;
    let right;
    let newPivot;
    if(s.length %2 !== 0) {
        pivot = Math.floor(s.length/2);
        newPivot = pivot;
        left = pivot -1;
        right = pivot +1;
        while(left >=0 && right < s.length) {
            if(s[left] !== s[right]) {
                newPivot = left;
                left = newPivot -1;
                right = newPivot +1;
            } else {
                left--;
                right++;
            } 
        }
        if(newPivot === pivot) return true  //perfect match
        return completePalindrome(s, newPivot)    //no chance, complete palindrom from scracth
    } else {
        pivot = (s.length/2)-1
        newPivot = pivot;
        left = pivot-1;
        right = pivot +1;
        while(left >=0 && right < s.length) {
            if(s[left] !== s[right]) {
                newPivot = left;
                left = newPivot-1;
                right = newPivot +1;
            } else {
                left--;
                right++;
            }
        }
        if(newPivot === pivot) return completePalindrome(s, newPivot);  //perfect match
        return completePalindrome(s, newPivot)    //no chance, complete palindrom from scracth
    }
};

function completePalindrome(s, start){
    let length = s.length;
    let copy = s.slice()
    for(let i = 2*start +1; i< length; i++){
        s = copy[i] + s;
    }
    return s;
}

let s = "dajab"
shortestPalindrome(s)


function shortestPalindrome(s) {
    let pivot;
    let left;
    let right;
    let newPivot;
    if(s.length %2 !== 0) {
        pivot = Math.floor(s.length/2);
    } else {
        pivot = (s.length/2)-1
    }
    newPivot = pivot;
    left = pivot -1;
    right = pivot +1;
    while(left >=0 && right < s.length) {
        if(s[left] !== s[right]) {
            newPivot = left;
            left = newPivot -1;
            right = newPivot +1;
        } else {
            left--;
            right++;
        } 
    }
    return completePalindrome(s, newPivot)    //no chance, complete palindrom from scracth
};