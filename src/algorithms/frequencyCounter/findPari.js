function findPair(arr, n){
    let hash = {};
    
    for(let i=0; i < arr.length; i++) {
        if(hash[arr[i]]) hash[arr[i]].push(i);
        else hash[arr[i]] = [i];
    }
    let diff;
    for(let i=0; i < arr.length; i++) {
        diff = arr[i] - n;
        if(hash[diff]) {
            if(hash[diff][0] !== i) {
                return true;
            }
        }
    }
    return false;
}

function findPairSolution2(array, n) {
    let arr = array.sort();
    let i = 0;
    let j= arr.length-1;
    let middle;
    while(i < j){
        middle = Math.floor((j-i)/2);
        if((arr[middle] - arr[i]) > n ){
            j = middle -1;
        } else if((arr[middle] - arr[i]) < n) {
            i = middle +1;

        } else return true;
    }
    return false;
}