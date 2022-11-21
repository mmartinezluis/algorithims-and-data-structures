/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// Strategy: reverse the seond part of the linst, then merge the two lists
 var reorderList = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let prev = null;
    while(slow) {
        const temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    slow = prev;
    return mergeTwoList(head, slow);

    function mergeTwoList(l1, l2) {
        let prehead = new ListNode();
        let list = prehead;
        let token = 1;
        while(l1 && l2) {
            if(token > 0) {
                list.next = l1;
                l1 = l1.next;
            } else {
                list.next = l2;
                l2 = l2.next;
            }
            list = list.next;
            token = -1*token;
        }
        list.next = l1 ? l1 : l2;
        return prehead.next;
    }
 }