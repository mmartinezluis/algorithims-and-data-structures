/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let tortoise = head;
    let hare = head;

    while(hare && hare.next) {
        hare = hare.next.next;
        tortoise = tortoise.next;
        if(hare === tortoise) {
            tortoise = head;
            while(tortoise !== hare) {
                tortoise = tortoise.next;
                hare = hare.next;
            }
            return hare;
        }
    }
    return null;
};