// she the Divide and Conquer problem solving pattern
function countZeroes(arr){
    let i = 0;
    let j = arr.length-1;
    if(arr[0] === 0) return arr.length;
    if(arr[0] === 1 && arr[j] === 1) return 0;
    while( i !== j){
      let middle = Math.floor((i+j)/2);
      if(arr[middle] === 0){
          j = middle;
      } 
      else i = middle +1;
    }
    return arr.length - i;
  }