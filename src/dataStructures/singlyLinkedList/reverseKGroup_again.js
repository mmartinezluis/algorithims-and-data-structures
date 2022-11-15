/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// Recursive solution
 var reverseKGroup = function(head, k) {
    let node = head;
    let dummy;
    return fullReversal(node);
    function fullReversal(node) {
        let i = 0;
        dummy = node;
        while(i < k && dummy){
            dummy = dummy.next;
            i++;
        }
        if(i < k) return node;
        const linkage = reverse(node);
        node.next = fullReversal(dummy);
        return linkage;
    }   

    function reverse(node) {
        let prev = null;
        let count = k;
        while(count--) {
            const temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        return prev;
    }
 }

 function SinglyLinkedList() {
    this.head = null;
 }

 SinglyLinkedList.prototype.add = function(node) {
    node = new ListNode(node);
    if(!this.head) {this.head = node; return;}
    let dummy = this.head;
    while(dummy.next) {
        dummy = dummy.next;
    }
    dummy.next = node;
 }

 function ListNode(val) {
    this.val = val !== undefined ? val : 0;
    this.next = null;
 }

 const list = new SinglyLinkedList();
 list.add(1);
 list.add(2);
 list.add(3);
 list.add(4);
 list.add(5);
 reverseKGroup(list.head, 5)

