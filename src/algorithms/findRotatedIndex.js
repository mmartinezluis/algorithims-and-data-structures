// Lggic: First, find the index of rotation; this will allow us to split the array into two SORTED subarrays;
// note: the index of rotation is also the maximum value in the array;
// then applly binary search on each subarray to see if the given value is found in any of the subarrays;
// if value is found in first subarray, binary rearch function alone takes care of returning the correct index;
// if vales is found on second subarray,we need to start counting from the partition point (the rotatedIndex)
// and add 1 to the returned value of binary search function to fix the offset of the binary search result.

// Time complexity: log(n) [for finding the rotated index] + log(n) [for binary search] = 2log(n) = log(n)

function findRotatedIndex(arr, value){
    let i =0;
    let j = arr.length-1;
    let middle;
    if (arr[i] === value) return i;     //edge case
    if (arr[j] === value) return j;     //edge case
    while( i!==j ){
        middle = Math.floor((i+j)/2);
        if(arr[middle] > arr[i]){
            i = middle;
        } else j = middle;
    }
  
    let rotatedIndex = i;
    if (value > arr[rotatedIndex]) return -1;
    if (value === arr[rotatedIndex]) return rotatedIndex;
    if( value > arr[0]){
        return binarySearch(arr.slice(0, rotatedIndex), value);
    } else {
        let result = binarySearch(arr.slice(rotatedIndex+1), value);
        return result === -1 ? -1 : rotatedIndex + result + 1;
    } 
  }
  
  
  function binarySearch(arr, value){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end)/2);
    while( start <= end && arr[middle] !== value){
      if( arr[middle] < value ) start = middle +1;
      else end = middle -1;
      middle = Math.floor( (end + start)/2 );
    }
    return arr[middle] === value ? middle : -1;
  }


// let arr = [13,14,22,33,44,99,333,444,2,3,4];
// findRotatedIndex(arr,424)