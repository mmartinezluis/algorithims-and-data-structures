
//   Definition for singly-linked list.
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Connect the head of one list with the tail of the next lsit
 var reverseKGroup = function(head, k) {
    const r =reverse(head, k);
    console.log(r, head)
    let pointer = head;
    let o_tail = null;
    let r_head = null;
    while(pointer) {
        let count = 0;
        while(pointer && count < k) {
            pointer = pointer.next;
            count++;
        }
    }
};

function reverse(head, k) {
    new_head = null;
    curr = head;
    while(k > 0){
        const next_node = curr.next;
        curr.next = new_head;
        new_head = curr;
        curr = next_node;
        k -=1;
    }
    return new_head;
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

reverseKGroup(list, 2);