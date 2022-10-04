function quickSort(arr, left=0, right=arr.length-1) {
    if( left < right) {
        let pivotIndex = helper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    console.log(arr)
    return arr;
}

function helper(arr, start=0, end) {
    let pivotIndex = start;
    for(let i= start +1; i < end+1; i++) {
        if(arr[i] < arr[pivotIndex]) {
            swap(arr, pivotIndex, pivotIndex +1);
            if(pivotIndex + 1 !== i) {
                swap(arr, pivotIndex, i);
            }
            pivotIndex++;
        }
    }
    // console.log(arr);
    return pivotIndex;
}

function swap(arr, index1, index2) {
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
}

const arr=[8,-9,-10,11,5,124,-13,-14,15];

quickSort(arr)