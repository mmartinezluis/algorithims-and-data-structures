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
 var swapNodes = function(head, k) {
    let node = head;
    let counter = 1;
    let node1;
    let node2;
    let middle;
    let distance;
    while(node.next){
        if(counter === k) node1= node;
        node = node.next;
        counter++;
    }
    if(counter % 2 !== 0){
        middle = Math.floor(counter/2)+1;
        if(k > middle){
            node2 = head;
            for(let i = 0; i < middle-k; i++){
                node2 = node2.next;
            } 
        } else if(k < middle){
            node2= node1;
            for(let i = k; i < 2*(middle-k); i++){
                node2 = node2.next;
            } 
        }
        if(node2) swap(node1, node2);
        
    } else {
        middle = counter/2;
        if( k === middle || k === middle+1){
            swap(node1, node1.next);
        } else if(k > middle +1){
            distance = k-middle -1;
            node2 = head;
            for(let i = 0; i < (middle- distance); i++){
                node2= node2.next;
            }
            swap(node1, node2);
        } else {
            distance = 2*(middle-k) + 1;
            node2 = node1;
            for(let i = k; i < k + distance; i++){
                node2= node1.next;
            }
            swap(node1, node2);
        }
    }    
    return head;
};


function swap(node1, node2){
    let temp = node1;
    node1.val = node2.val;
    node2.val = temp.val;
}