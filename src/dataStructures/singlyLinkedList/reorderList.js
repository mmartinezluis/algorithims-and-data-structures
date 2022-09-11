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
    // Split the list in half
    let i =0;
    let node = head
    while(node) {
        node = node.next;
        i++;
    }
    
    let j = 0;
    node = head;
    let list2;
    while(j < i/2) {
        j++;
        if( j == Math.floor(i/2)) {
            list2 = node;
        }
        node = node.next;
    }
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

    // return mergeLists(head, list2, 1)
    // Do alternative merge between first half of original liist and list2
    function mergeLists(list1, list2, token) {
        console.log(list1);
        if(!list1) return list2;
        if(!list2) return list1;
        if(token > 0) {
            list1.next = mergeLists(list1.next, list2, -1);
            return list1;
        }
        if(token < 0) {
            list2.next = mergeLists(list1, list2.next, 1);
            return list2;
        }
    }

    // if(!head) return null;
    // head.next = helper(head);
    // function helper(node) {
    //     const reference = node;
    //     while(reference.next) {
    //         reorderList(reference.next)
    //         reference = reference.next
    //     }
    //     return reference;
    // }
    // return head;
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
