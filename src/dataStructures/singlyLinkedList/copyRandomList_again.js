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