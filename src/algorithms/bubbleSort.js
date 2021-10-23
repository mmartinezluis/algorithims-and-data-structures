// Solution 1: Brute force solution
// Go through the array and compare adjacent elements; if left element > right element,
// swapt the elements

// Example: let arr = [4,66,8,55,2,1]
// For i = 0           For i = 1            For i = 2           For i = 3           For i = 4           For i = 5
// [4,66,8,55,2,1]     [4,8,55,2,1,66]      [4,8,2,1,55,66]     [2,4,1,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]  
// [4,8,66,55,2,1]     [4,8,55,2,1,66]      [4,2,8,1,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]
// [4,8,55,66,2,1]     [4,8,2,55,1,66]      [4,2,1,8,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]
// [4,8,55,2,66,1]     [4,8,2,1,55,66]      [4,2,1,8,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]
// [4,8,55,2,1,66]     [4,8,2,1,55,66]      [4,2,1,8,55,66]     [2,1,4,8,55,66]     [1,2,4,8,55,66]     [1,2,4,8,55,66]


function bubbleSort2(arr){   
    for(let i= 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -1; j++ ){
            if(arr[j] > arr[j+1]) swap(arr,j,j+1);
            console.log(i,j, j+1)
        }
    }
    return arr
}

// Optimized solution: 

function swap(arr, index1, index2){
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]
}