/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    let heap = [];
    for(let i=0; i < stones.length; i++) {
        heap.push(stones[i]);
        bubbleUp(heap);
    }
    while(heap.length > 1) {
        const max = extractMax(heap);
        if(max === heap[0]) {
            extractMax(heap);
        } else {
            heap[0] = max - heap[0];
            bubbleDown(heap);
        }
    }
    return heap.length > 0 ? heap[0] : 0;
};

function bubbleUp(values) {
    let index = values.length -1;
    let node, parent, parentIndex;
    while(index > 0) {
        node = values[index];
        parentIndex = Math.floor((index -1)/2);
        parent = values[parentIndex];
        if(parent > node) break;
        values[parentIndex] = node;
        values[index] = parent;
        index = parentIndex;
    }
}

function extractMax(values) {
    const max = values[0];
    const end = values.pop();
    if(values.length > 0) {
        values[0] = end;
        bubbleDown(values);
    }
    return max;
}

function bubbleDown(values) {
    let index = 0;
    let node, childIndex, child1, child2;
    while(index < values.length -1) {
        let swapIndex = null;
        node = values[index];
        childIndex = 2*index + 1;
        child1 = values[childIndex];
        child2 = values[childIndex +1];
        if(child1 !== undefined && node < child1) swapIndex = childIndex;
        if(child2 !== undefined && node < child2 && child2 > child1) swapIndex = childIndex +1;
        if(swapIndex === null) break;
        swap(values, index, swapIndex);
        index = swapIndex;
    }
}

function swap(arr, index1, index2) {
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]
}

// Test
let stones = [2,7,4,1,8,1];
stones = [1]
const answer = lastStoneWeight(stones);
console.log(answer);