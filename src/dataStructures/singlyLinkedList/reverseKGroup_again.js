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
 var reverseKGroup = function(head, k) {
    let node = head;
    let rh;

    const ans = fullReversal(node);
    console.log(ans)

    function fullReversal(node) {
        let i =0;
        let dummy = node;
        while( i < k && dummy){
            dummy = dummy.next;
        }
        if(i + 1 < k) return node;
        const linkage = reverse(node)[0];
        rh = linkage[0];
        rh.next = fullReversal(linkage[1]);
        return node;
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
        return [prev, node];
    }
 }

 function SinglyLinkedList() {
    this.head = null;
 }

 SinglyLinkedList.prototype.add = function(node) {
    if(!this.head) {this.head = node; return;}
    const dummy = this.head;
    while(dummy.next) {
        dummy = dummy.next;
    }
    dummy.next = node;
 }

 function ListNode(val) {
    this.val = this.val !== undefined ? val : 0;
    this.next = null;
 }

 const list = new SinglyLinkedList();
 list.add(1);
 list.add(2);
 list.add(3);
 list.add(4);
 list.add(5);
 console.log(list)