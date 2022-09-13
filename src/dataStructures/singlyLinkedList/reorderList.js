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

// Iterative solution
var reorderList = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev= null , current = slow, temp = null;
    while(current) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    let first = head, second = prev;
    while(second.next) {
        temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }
    console.log(JSON.stringify(head, null, 2))
}




// Does not work
 var reorderList2 = function(head) {
     
    // Split the list in half)
    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let prev= null, current = slow, temp = null
    while(current) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    let second = prev;
    console.log(second)
    // mergeLists(head, second, 1)
    
    // Do alternative merge between first half of original liist and list2
    function mergeLists(list1, list2, token) {
        if(!list1 || !list2) return null;
        if(token > 0) {
            list1.next = mergeLists(list1.next, list2, -1);
            return list1;
        }
        if(token < 0) {
            list2.next = mergeLists(list1, list2.next, 1);
            return list2;
        }
    }
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new ListNode(1);
const two = head.next = new ListNode(2);
const three = two.next = new ListNode(3);
const four = three.next = new ListNode(4);
four.next = new ListNode(5);

reorderList2(head)
