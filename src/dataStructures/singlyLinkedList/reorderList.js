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
 var reorderList = function(head) {
    
    if(!head) return null;

    head.next = helper(head);

    function helper(node) {
        const reference = node;
        while(reference.next) {
            reorderList(reference.next)
            reference = reference.next
        }
        return reference;
    }
    return head;
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    return this;
}
let head = ListNode(1);
// const two = head.next = ListNode(2);
head.next = 2
// const three = two.next = ListNode(3);
// const four = three.next = ListNode(4);
// const five = four.next = ListNode(5);
console.log(head.next)