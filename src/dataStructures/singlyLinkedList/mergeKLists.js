/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let queue = [];
    queue.push(lists.shift());
    queue.push(lists.shift());

    let prehead = new ListNode(0);
    let curr = prehead;
    while(queue.length) {
        const union = merge(queue.shift(), queue.shift());
        if(!union) break;
        curr.next = union;
        curr = curr.next;
        if(lists.length) {
            queue.push(lists.shift());
            queue.push(lists.shift());
        }
    }
    return prehead.next;
 }
 

function merge(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    }
    else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
}