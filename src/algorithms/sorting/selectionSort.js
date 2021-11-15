// Logic: 
// Set the minimum value of the array to correspond to the first index of the array;
// then traverse the array; if a value less than the set minimum is found, update the
// minimum(min) to be the index of the new minimum value;
// at the end of the corresponding cycle, if the index of the first element of the array
// in the current cycle is different min, swap the elements; this way, at the end of each cycle
// the next smallest value will be at the beginning of the array

function selectionSort(arr, comparator){
    if(typeof(comparator) !== 'function') comparator = compare;
    let min;
    for(let i = 0; i < arr.length -1; i++){
        min = i;
        for(let j = i+1; j < arr.length; j++){
            if (comparator(arr[j], arr[min]) < 0 ) min = j;
        }
        if(i !== min ) swap(arr, i, min);
    }
    return arr;
  }
  
  function compare(a, b){
      if(a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
  }
  
  function swap(arr, index1, index2){
      [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
  }