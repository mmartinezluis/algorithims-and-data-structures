function insertionSort(arr, comparator){
    if(typeof(comparator) !== 'function' ) comparator = compare;
    for(let i =1; i< arr.length; i++ ) {
        let value = arr[i];
        for(let j=i; j >=0; j--){
          if(compare(value, arr[j-1]) < 0) swap(arr, j-1, j);
        }
    }
    return arr;
  }
  
  function compare(a,b) {
      if( a < b) {return -1;}
      else if(a > b) {return 1;}
      return 0;
  }
  
  function swap(arr, index1, index2){
      [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1]];
  }
  