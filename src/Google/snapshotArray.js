/**
 * @param {number} length
 */
 var SnapshotArray = function(length) {
    this.values = new Array(length).fill(0);
    this.snaps = new Map();
    this.snaps_count = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.values[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snaps.set(this.snaps_count, this.values.slice());
    this.snaps_count += 1;
    return this.snaps_count - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  return this.snaps.get(snap_id)[index]
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */