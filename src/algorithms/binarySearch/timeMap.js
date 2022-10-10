
var TimeMap = function() {
    this.timeMap = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.timeMap[key]) {
        this.timeMap[key] = [{timestamp, value}];
    } else {
        this.timeMap[key].push({timestamp, value});
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const arr = this.timeMap[key];
    if(!arr) return "";
    return findTimeStamp(this.timeMap[key], timestamp) || ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

function findTimeStamp(arr, timestamp) {
    let left= 0;
    let right = arr.length - 1;
    if(arr.length === 0) return undefined
    if(arr[right].timestamp <= timestamp) return arr[right].value;
    let pivot;
    while(left <= right) {
        pivot = Math.floor((left + right)/2);
        if(arr[pivot].timestamp <= timestamp && arr[pivot +1].timestamp > timestamp) {
            return arr[pivot].value;
        }
        if(arr[pivot.timestamp < timestamp]) {
            left = pivot + 1;
        } else right = pivot -1;
    }
}