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
    if(lists.length === 1) return lists[0];
    let i=0;
    let queue = [];
    while(i < lists.length) {
        queue.push(merge(lists[i], lists[i+1]));
        i +=2;
    }
    return mergeKLists(queue);
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