/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 81% faster; 51% memory
 var reverseList = function(head) {
    let curr = head;
    let previous = null
    while(head) {
        head = head.next;
        curr.next = previous;
        previous = curr;
        if(head) curr = head;
    }
    return curr;
};