
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
    let prehead = new ListNode(0)
    prehead.next = head;
    let dummy = head;
    let prev = null;
    console.log(dummy)
    while(dummy) {
        const firstPass = reverse(prev, dummy, k);
        
        dummy = firstPass[0];
        console.log(dummy)
        const secondPass = reverse(prev, firstPass[2], k);
        dummy.next = secondPass[1];
        dummy = secondPass[0];
        console.log(dummy)
    }
    // console.log(head)
    return prehead.next;
};

function reverse(prev, head, k) {
    let dummy = head;
    let curr = head;
    let counter = 0;
    while(curr && counter < k) {
        dummy = dummy.next;
        curr.next = prev;
        prev = curr;
        curr = dummy;
        counter++;
    }
    const final = [head, prev, curr];
    // console.log(final);
    return final;
    // return [originalHead, originalTail];
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

reverseKGroup(null, list, 3);