
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
    let prehead = new ListNode(0);
    prehead.next = head;
    let dummy = head;
    let prev = null;
    let result;
    while(dummy) {
        const firstPass = reverse(prev, dummy, k);        
        dummy = firstPass[0]; 
        const secondPass = reverse(prev, firstPass[2], k);
        dummy.next = secondPass[1];
        dummy = secondPass[2];
        result = firstPass[1];
    }
    // console.log(result.next);
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
    if(counter !== k) {
        // Backtrack
        let prev2 = null
        curr = prev;
        dummy = prev;
        while(curr) {
            dummy = dummy.next;
            curr.next = prev2;
            prev2 = curr;
            curr = dummy;
        }
        console.log(head)
        // return [head, prev, curr];
    }
    const final = [head, prev, curr];
    // console.log(final);
    return final;
    // return [originalHead, originalTail];
}

let list = new ListNode(1);
list.next = new ListNode(2);
// list.next.next = new ListNode(3);
// list.next.next.next = new ListNode(4);
// list.next.next.next.next = new ListNode(5);

reverseKGroup(list, 3);