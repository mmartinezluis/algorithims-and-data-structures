/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let value = 0;
    let remainder = 0;
    let prehead = new ListNode();
    let list = prehead;
    while(l1 || l2) {
        sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder;
        value = sum;
        remainder = 0;
        if(sum > 9) {
            value = sum % 10;
            remainder = Math.floor(sum/10);
        }
        list.next = new ListNode(value);
        list = list.next;
        l1 = (l1 && l1.next) || null;
        l2 = (l2 && l2.next) || null;
    }
    if(remainder > 0) list.next = new ListNode(remainder);
    return prehead.next;
};