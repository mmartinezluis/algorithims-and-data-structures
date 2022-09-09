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
    return head
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

ListNode(4)