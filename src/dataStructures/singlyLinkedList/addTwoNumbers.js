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

// 51% faster; 70% less memory
// Iterative solution
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


// Recursive solution:
// 62% faster; 80% less memory
var addTwoNumbers = function(l1, l2) {
    let digits;
    let l3 = new ListNode();
    let surplus = 0;
    let curr = l3;
    function helper(l1, l2, curr, surplus) {
        digits = (l1?.val || 0) + (l2?.val || 0)  + surplus;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        surplus = Math.floor((digits/10) % 10)
        digits = digits % 10;
        curr.val = digits;
        if(l1 || l2) {
            curr.next = new ListNode();
            curr = curr.next;
            helper(l1,l2,curr,surplus)
        } else if(surplus) curr.next = new ListNode(surplus)
        return
    }
    helper(l1, l2, curr, surplus)
    return l3;
};