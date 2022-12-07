/**
 * @param {number} length
 */
 var SnapshotArray = function(length) {
    this.values = Array.from({length: length}, () => {
        return new Map();
    });
    this.snaps_count = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.values[index].set(this.snaps_count, val)
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snaps_count++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const object = this.values[index];
    const keys = [...object.keys()];
    let i = keys.length-1;
    while(i > 0 && keys[i] > snap_id ) {
        i--;
    }
    return i === 0 && keys[i] > snap_id ? 0 : object.get(keys[i]) || 0;
};
//  Faster method
SnapshotArray.prototype.get = function(index, snap_id) {
    while(snap_id >= 0) {
        if(this.snaps[index].has(snap_id)) {
            return this.snaps[index].get(snap_id);
        }
        snap_id--;
    }
    return 0;
};
