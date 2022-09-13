/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let reversed = head;
    let prev, temp;
    while(reversed) {
        temp = reversed.next;
        reversed.next = prev;
        prev = reversed;
        reversed = temp
    }
    reversed = prev;

    let i = 1;
    let prev2;
    while(i !== n) {
        i++;
        prev2 = reversed;
        reversed = reversed.next;
    }

    if(!prev2) {
        reversed = reversed.next;
    }
    else {
        prev2.next = reversed.next;
    }

    let current = reversed;
    let prev3 = null;
    while(current) {
        temp = current.next;
        current.next = prev;
        prev3 = current;
        current = temp;
    }

    return prev3;
};