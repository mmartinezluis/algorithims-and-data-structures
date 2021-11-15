// Uses the Divide and Conquer problem solving pattern
function countZeroes(arr){
    let i = 0;
    let j = arr.length-1;
    // if array sttarts with zero, all elements are zero
    if(arr[0] === 0) return arr.length;
    // fi array starts and ends with 1, all elements are one
    if(arr[0] === 1 && arr[j] === 1) return 0;
    while( i !== j){
      let middle = Math.floor((i+j)/2);
    //   if middle if zero, move j to middle index
      if(arr[middle] === 0){
          j = middle;
      } 
    //   if middle iz not zero, move i to middle plus one;
      else i = middle +1;
    }
    return arr.length - i;
  }