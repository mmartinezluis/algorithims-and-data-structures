/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.head = null;
    this.next = null;
    this.cache = new Array(capacity);
    this.amp = new Map();
    this.ranks = new Array(capacity).fill(0);
    this.hits = 0;
    this.LRU = null;
    this.MRU = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(map[key] === undefined) {
        return -1;
    }
    const index = map[key]
    return cache[index].val;

}.bind(this);

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!map.has(key)) {
        if(map.size < this.capacity) {
            map.set(key, map.size +1);
            const index = map.size;
            cache[index] = new NodeList(value, index);
            this.MRU = index;
            if(map.size === 1) this.LRU = index;

        } else {
            const freshNew = new NodeList(value, this.LRU);
            temp = cache[this.LRU];
            this.LRU = temp.next.index;
            cache[this.LRU] = freshNew;
            cache[this.MRU].next = freshNew;
        }

    } else {
        const index = map.get(key);
        const oldRecent = cache[this.MRU];
        const recent = cache[index];
        oldRecent.next = recent;
        recent.next = null;
        this.MRU = index;

    }
}.bind(this);

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */







var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.list = new DoublylinkedList();
};

LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    const temp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp;
}

LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value);
}



// Using a doubly-linked list and a hashmap
/**
 * 
 * @param {number} val 
 * @param {ListNode} next 
 */
// Helper
let ListNode = function(val, index, next) {
    this.val = val;
    this.next = null;
    this.prev = null;
}
// Helper
function DoublylinkedList() {
    this.head = null;
    this.tail = null;
}


var LRUCache = function(capacity) {
    this.cache = new Map([
        ["tail", new ListNode()], ["head", new ListNode()]
    ]);
    this.capacity = capacity;
    this.list = new DoublylinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
 LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    let node = this.cache.get(key);
    if(!node.next) return node.value;
    let newHead;
    let oldHead;
    if(!node.prev) {
        newHead = node;
        node.next.prev = null;
        oldHead = this.cache.get("head");
        newHead.prev = oldHead;
        newHead.next = null;
        oldHead.next = newHead;
        this.cache.set("tail", node.next);
        this.cache.set("head", newHead);
        return newHead.val;
    }
    newHead = node;
    node.next = node.next.next;
    node.next.next.prev = node.prev;
    oldHead.next = newHead;
    newHead.prev = oldHead;
    this.cache.set("head", newHead);
    return newHead.value;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.size === 0) {
        const node = new ListNode(value);
        this.cache.set(key, node);
        this.cache.set("head", node);
        this.cache.set("tail", node);
        return value;
    }
    let oldTail, newTail, oldHead, newHead;
    if(!this.cache.has(key)) {
        if(this.cache.size - 2 === capacity) {
            oldTail = this.cache.get("tail");
            newTail = oldTail.next;
            this.cache.delete(oldTail.val);
            newTail.prev = null;
            this.cache.set('tail', newTail);
            oldHead = this.cache.get("head");
            newHead = new ListNode(value);
            oldHead.next = newHead;
            newHead.prev = oldHead;
            this.set("head", newHead);
            this.set(value, newHead);      
            return value;      
        } else {
            oldHead = this.cache.get("head");
            newHead = new ListNode(value);
            oldHead.next = newHead;
            newHead.prev = oldHead;
            this.set("head", newHead);
            this.set(value, newHead);      
            return value;
        }
    } else {
        if(this.cache.size - 2 === capacity) {
            oldTail = this.cache.get("tail");
            newTail = oldTail.next;
            this.cache.delete(oldTail.val);
            newTail.prev = null;
            this.cache.set('tail', newTail);
            oldHead = this.cache.get("head");
            newHead = new ListNode(value);
            oldHead.next = newHead;
            newHead.prev = oldHead;
            this.set("head", newHead);
            this.set(value, newHead);      
            return value;      
        } else {
            oldHead = this.cache.get("head");
            newHead = new ListNode(value);
            oldHead.next = newHead;
            newHead.prev = oldHead;
            this.set("head", newHead);
            this.set(value, newHead);      
            return value;
        }
    }


    if(this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value);
}