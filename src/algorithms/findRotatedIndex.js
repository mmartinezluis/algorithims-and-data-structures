function findRotatedIndex(arr){
    let i =0;
    let j = arr.length-1;
    let middle;
    
    while( i!==j ){
        middle = Math.floor((1+j)/2);
        if(arr[j] < arr[i]){
            j = middle;
        } else {
            i = middle;
            if( j - i === 1){
                arr[j] > arr[i] ? i=j : j=i;
            }
        }
    }
    return j;
  //   let rotatedIndex = i;
  //   if( integer < arr[rotatedIndex] ){
  //       return binarySearch(arr.slice(0, rotatedIndex));
  //   } else if( integer > arr[rotatedIndex]){
  //       let result = binarySearch(arr.slice(rotatedIndex+1));
  //       return result === -1 ? -1 : rotatedIndex + result + 1;
  //   } else return rotatedIndex;
  }
  
  let arr = [13,14,22,33,44,99,100,333,4];
  
  findRotatedIndex(arr)