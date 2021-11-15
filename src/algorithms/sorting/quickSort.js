function pivot(arr, comparator, start=0, end=arr.length - 1){
    let value = arr[start];
    let swapIndex = start;
    if(typeof(comparator) !== 'function') comparator = compare;
    for(let i = start + 1; i < arr.length; i++){    
        if(comparator(value, arr[i]) > 0){
          swapIndex++;
          swap(arr,swapIndex,i);
        }
    }
    swap(arr, swapIndex, start);
    return swapIndex;
  }
  
  function compare(a,b){
      if( a > b){return 1;}
      else if(a < b){return -1;}
      return 0;
  }
  
  function swap(arr, index1, index2){
      [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1]];
  }
  
  
  function quickSort(arr, comparator, left=0, right=arr.length-1) {
    if(left < right){
        let pivotIndex = pivot(arr, comparator, left, right);
        quickSort(arr, comparator, left, pivotIndex -1);
        quickSort(arr, comparator, pivotIndex +1, right);
    }
    return arr;
    
  }