/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    let sortedPoints = new MinBinaryHeap(points);
    console.log(sortedPoints.values)
    let result = [];
    while(k > 0) {
        result.push((sortedPoints.extractMin()).val);
        k--;
    }
    console.log(result)
    return result;
};

class MinBinaryHeap {
    constructor(values) {
        this.values = [];
        if(Array.isArray(values)) {
            for(let point of values) {
                const node = {};
                node.val = point;
                node.dist = distanceToOrigin(point);
                this.add(node);
            }
        } 
    }

    add(node){
        this.values.push(node);
        this._bubbleUp();
    }

    _bubbleUp() {
        let index = this.values.length -1;
        let node, parent, parentIndex;
        while(index > 0) {
            node = this.values[index].dist;
            parentIndex = Math.floor((index -1)/2);
            parent = this.values[parentIndex].dist;
            if(parent < node) break;
            this._swap(this.values, index, parentIndex);
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this._bubbleDown();
        }
        return min;
    }

    _bubbleDown() {
        let index = 0;
        let node, childIndex, child1, child2;
        while(index < this.values.length -1) {
            let swapIndex = null;
            node = this.values[index].dist;
            childIndex = 2*index + 1;
            child1 = this.values[childIndex];
            child2 = this.values[childIndex + 1];
            if(child1 !== undefined && node > child1.dist) swapIndex = childIndex;
            if(child2 !== undefined && node > child2.dist && child2.dist < child1.dist) swapIndex = childIndex +1;
            if(swapIndex === null) break;
            this._swap(this.values, index, swapIndex);
            index = swapIndex;
        }
    }

    _swap(arr, index1, index2) {
        [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
    }
}

function distanceToOrigin(point) {
   return Math.sqrt(((point[0])**2) + ((point[1])**2));
}

// Test
let points = [[1,3],[-2,2]]; let k = 1;
points = [[3,3],[5,-1],[-2,4]]
k = 2
points = [[-5,4],[-3,2],[0,1],[-3,7],[-2,0],[-4,-6],[0,-5]]
k = 6
kClosest(points, k);