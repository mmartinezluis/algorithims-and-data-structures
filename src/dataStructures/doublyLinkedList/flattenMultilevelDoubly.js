// 430. Flatten a Multilevel Doubly Linked List
// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// Example 1:
// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
// --------------------------------------------------------------------

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
    let current = head;
    let stack = [];
    let reference;
    let child;
    if(!current) return head;
    function traverse(node){
        if(node.child){
            if(node.next) stack.push(node.next);  //if the current node has child and it is not the end node of the current row, store the remainder of the node in the stack
            node.next = node.child;
            node.child.prev = node;
            child = node.child;       //store the child
            node.child = null;        // nullify the 
            traverse(child);
        }
        else {
            if(node.next) {
                traverse(node.next);
            } 
            else {
                current = node;
                reference = stack.pop();
                if(reference){
                    current.next = reference;
                    reference.prev = current;
                    traverse(current.next)
                }
            }   
        }   
    }
    traverse(current);
    return head;
};


// Improtved: 93% speed and 65% memodry
// Logic
 var flatten = function(head) {
    let stack = [];
    let reference;
    // let child;
    if(!head) return head;
    function traverse(node){
        if(node.child){
            if(node.next) stack.push(node.next);  //if the current node has a child and it is not the end node of the current row, store the remainder of the node in the stack
            node.next = node.child;
            node.child.prev = node;
            // child = node.child;       //store the child
            // node.child = null;        // nullify the 
            traverse(node.child);
            node.child = null;
//             Getting rid of the child variable increases the speed by 30%
        }
        else {
            if(node.next) {
                traverse(node.next);
            } 
            else {
                reference = stack.pop();
                if(reference){
                    node.next = reference;
                    reference.prev = node;
                    traverse(node.next)
                }
            }   
        }   
    }
    traverse(head);
    return head;
};
