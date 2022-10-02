function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let pivotIndex = helper(arr);
    let left = arr.slice(0, pivotIndex);
    let right = arr.slice(pivotIndex);
    let result = quickSort(left).concat(quickSort(right));
    console.log(result)
    return result;
}

function helper(arr) {
    let pivotIndex = 0;
    for(let i=1; i < arr.length; i++) {
        if(arr[i] < arr[pivotIndex]) {
            swap(arr, pivotIndex, pivotIndex +1);
            if(pivotIndex + 1 !== i) {
                swap(arr, pivotIndex, i);
            }
            pivotIndex++;
        }
    }
    // console.log(arr, pivotIndex);
    return pivotIndex
}

function swap(arr, index1, index2) {
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
}

const arr=[8,-9,-10,11,5,12,-13,-14,15];

quickSort(arr)