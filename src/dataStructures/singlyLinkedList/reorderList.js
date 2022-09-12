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
     
    // Split the list in half)
    let i =0;
    let node = head
    while(node) {
        node = node.next;
        i++;
    }
    
    let j = 0;
    node = head;
    let list2;
    let reference;
    const middle = Math.floor(i/2);
    let cutPoint;
    while(j < i) {
        j++;
        if(j === middle) {
            cutPoint = node;
            reference = node.next ? new ListNode(node.next.val) : null
            list2 = reference;
            console.log(list2)
        } else if(j+1 > middle ) {
            reference.next = node && new ListNode(node.val)
        }
        node = node.next;
    }
    cutPoint.next = null;
    if(!list2) return head;
     
    // Reverse list2
    let node2 = list2;
    let prev;
    while(list2) {
        list2 = list2.next;
        node2.next = prev;
        prev = node2;
        node2 = list2;
    }
     
    list2 = prev;
    
    const result = mergeLists(head, list2, 1)
     
    // Do alternative merge between first half of original liist and list2
    function mergeLists(list1, list2, token) {
        if(!list1) return list2;
        if(!list2) return null;
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
// const five = four.next = new ListNode(5);

reorderList(head)
