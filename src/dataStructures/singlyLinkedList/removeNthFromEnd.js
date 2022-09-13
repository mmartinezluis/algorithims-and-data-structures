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

// Solution works, but is is non optimal
 var removeNthFromEnd = function(head, n) {
    let reversed = head;
    let prev = null, temp;
    while(reversed) {
        temp = reversed.next;
        reversed.next = prev;
        prev = reversed;
        reversed = temp;
    }
    reversed = prev;
    
    let i = 1;
    let prev2;
    let reference = reversed;
    while(i !== n) {
        i++;
        prev2 = reference;
        reference = reference.next;
    }

    if(!prev2) {
        reversed = reversed.next;
    }
    else {
        prev2.next = reference.next;
    }

    let current = reversed;
    let prev3 = null;
    while(current) {
        temp = current.next;
        current.next = prev3;
        prev3 = current;
        current = temp;
    }

    return prev3;
};

console.log(JSON.stringify(prev3, null, 2), JSON.stringify(reversed, null, 2));
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new ListNode(1);
const two = head.next = new ListNode(2);
const three = two.next = new ListNode(3);
const four = three.next = new ListNode(4);
four.next = new ListNode(5);

removeNthFromEnd(head, 5)