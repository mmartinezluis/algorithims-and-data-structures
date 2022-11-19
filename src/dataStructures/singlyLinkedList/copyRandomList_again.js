/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// O(n) space
 var copyRandomList = function(head) {
    let map = new Map();
    let prehead = new Node();
    let dummy = prehead;
    let node = head;
    map[null] = null;

    while(node) {
        if(!map.has(node)) map.set(node, new Node(node.val));
        dummy.next = map.get(node);
        if(node.random && !map.has(node.random)) map.set(node.random,new Node(node.random.val));
        dummy.next.random = map.get(node.random);
        dummy = dummy.next;
        node = node.next;
    }
    return prehead.next;
 }

//  Interweave the copied nodes into the original list
 var copyRandomList = function(head) {
    if(!head) return head;
    let node = head;
    // interweave the copied nodes into the original list
    while(node) {
        const copy = new Node(node.val);
        copy.next = node.next;
        node.next = copy;
        node = node.next.next;
    }

    node = head;
    // make the copied nodes pointer reference the original node's pointer
    while(node) {
        node.next.random = node.random ? node.random.next : null;
        node = node.next.next;
    }

    node = head;
    let dummy = head.next;
    let new_head = head.next;
    // Unweave the copied list and the original list
    while(node) {
        node.next = node.next.next;
        dummy.next = dummy.next ? dummy.next.next : null;
        node = node.next;
        dummy = dummy.next;
    }
    return new_head;
 }