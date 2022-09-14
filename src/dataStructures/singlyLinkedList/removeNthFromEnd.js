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



var removeNthFromEnd2 = function(head, n) {

    // Make one pass to get list length
    let length = 0;
    let temp = head;
    while(temp) {
        temp = temp.next;
        length += 1;
    }

    // Loop until getting to target node
    const target = length - n + 1;
    let prev = null;
    let current = head;
    let counter = 1;
    while(counter !== target) {
        prev = current;
        current = current.next;
        counter++;
    }

    // If target node was last node (from right to left), 
    // move the head one step forward
    !prev ? head = head.next : prev.next = current.next;

    console.log(JSON.stringify(head, null, 2))

    return head;

}


var removeNthFromEnd3 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    let first = head;
    while(first) {
        length++;
        first = first.next;
    }

    length -= n;
    first = dummy;
    while(length > 0) {
        length--;
        first = first.next;
    }

    first.next = first.next.next;
    return dummy.next;

}

var removeNthFromEnd4 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for(let i=1; i <= n+1; i++) {
        first = first.next;
    }
    
    while(first) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    return dummy.next;
}


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


let head = new ListNode(1);
const two = head.next = new ListNode(2);
const three = two.next = new ListNode(3);
const four = three.next = new ListNode(4);
four.next = new ListNode(5);

removeNthFromEnd4(head, 5)