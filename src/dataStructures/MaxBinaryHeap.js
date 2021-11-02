class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIdx = Math.floor((index - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }

    extractMax(){
        let max = this.values[0];
        let end =this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }
        
    bubbleDown(){
        let index = 0;
        let node;
        let child1, child2;
        while(index < this.values.length-1){
            let swapIndex = null;
            node = this.values[index];
            let child1Index = 2*index+1;
            child1 = this.values[child1Index];
            child2 = this.values[child1Index +1];
            if(child1 && node < child1) swapIndex = child1Index;
            if(child2 && node < child2 && child2 > child1) swapIndex = child1Index +1;
            if (swapIndex === null) break;
            swap(this.values, index, swapIndex);
            index = swapIndex;
        }
        function swap(arr, index1, index2){
            [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1 ]];
        }
    }
}

// let heap = new MaxBinaryHeap();
// heap.values.push(35).push(20).push(24).push(14).push(19).push(6).push(1)
