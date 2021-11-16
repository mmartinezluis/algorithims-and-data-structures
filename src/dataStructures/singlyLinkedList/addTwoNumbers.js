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
    let digits;
    let l3 = new ListNode();
    let surplus = 0;
    let curr = l3;
    while(l1 || l2){
        digits = (l1?.val || 0) + (l2?.val || 0) + surplus;
        if(l1) l1= l1.next;
        if(l2) l2= l2.next;
        digits = digits + "";
        if(digits.length ===2){
            surplus = digits[0];
            surplus = parseInt(surplus);
            digits = digits[1];
        } else {
            surplus = 0;
        }
        curr.val = parseInt(digits);
        if(l1 || l2) {
            curr.next = new ListNode();
            curr = curr.next;
        } else if(surplus) curr.next = new ListNode(surplus);
    }
    return l3;
};