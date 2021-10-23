// Solution 1: Brute force solution
// Go through the array and compare adjacent elements; if left element > right element,
// swap the elements

// Example: let arr = [4,66,8,55,2,1]

                // Logic: if j > j+1, swap arr[j] with arr[j+1]

// For i = 0           For i = 1            For i = 2           For i = 3           For i = 4           For i = 5
//  j j+1
// [4,66,8,55,2,1]     [4,8,55,2,1,66]      [4,8,2,1,55,66]     [2,4,1,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]  
// [4,8,66,55,2,1]     [4,8,55,2,1,66]      [4,2,8,1,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]
// [4,8,55,66,2,1]     [4,8,2,55,1,66]      [4,2,1,8,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]
// [4,8,55,2,66,1]     [4,8,2,1,55,66]      [4,2,1,8,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]
// [4,8,55,2,1,66]     [4,8,2,1,55,66]      [4,2,1,8,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]

// Optimization:
// notice that on iteration cycle 4 (i=4), the array is already sorted, but we are still traversing the array 
// to see if there are any pairs for which arr[j] > arr[j+1]. We can avoid this by adding a boolean variable 
// that checks whether there were no swaps in a givnn cycle; if there are no swaps for a full given cycle, it means that
// the array is already sorted and we can break out of the loop (to avoid going into another cycle of unnecessary comparisons)

// In addition, once a cycle is complete, the last element is already sorted, we can limit the next cycle tor run op to the 
// element BEFORE THE LAST SORTED ELEMENT. 

// Brute force solution
function bubbleSort(arr){   
    for(let i= 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -1; j++ ){
            if(arr[j] > arr[j+1]) swap(arr,j,j+1);
        }
    }
    return arr
}

// Optimized solution: 
function bubbleSortOptimized(arr){
    for(let i = arr.length; i > 0; i--){
        let noSwaps = true;
        for(let j = 0; j < i -1; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


// Helper function
function swap(arr, index1, index2){
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]
}


// Bubblesort with comparison function

function bubbleSortWithComparator(arr, comparator){
    if( typeof(comparator) !== 'function' ) comparator = compare;
    for(let i = 0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            if(comparator(arr[j], arr[j+1]) > 0 ) swap(arr, j, j+1);
        }
    }
    function swap(arr, index1, index2) {
        [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
    }
    return arr;
  }
  
  function compare(a, b) {
      if ( a < b) { return -1;}
      else if ( a > b ) { return 1;}
      return 0;
  }
  
