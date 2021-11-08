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


// Improtved: 93% speed and 65% memory
// Logic for solution:
//     It is best to use a whiteboard to see how to solve the problem.
//     Using a whiteboard, I was able to get an idea of how to solve the problem:
//     THe main approach consists of suing a combination of recursion and a stack;
//     Drawing an example of a multilevel doubly linked list on the whiteboard, it can be noticed that:
//         Once you encounter a node that has a child, you want to traverse that child node
//         But before traversing the child node, if the current node has more node(s) to the right,
//         we want to store the next reference somewhore to access it later;
//         more specifically, we want to store the reference in a stack (array);
//         once we get to the last child (by recursion), and we traverse the full row of the last child
//         we want to pop the last stored node in the stack and connect it to the last node in the last child's row;
//         we do this connection every time we get to the last node of a row
//         but after doing the connection, to be able to traverse the CONNECTED node,
//         we need to call a recursive function on the connected node.


 var flatten = function(head) {
    let stack = [];
    let reference;
    // let child;
    if(!head) return head;
    function traverse(node){
        if(node.child){             
            if(node.next) stack.push(node.next);  //if the current node has a child and it is not the end node of the current row, store the remainder of the node in the stack
            node.next = node.child;      // make the node's next node equal to its child
            node.child.prev = node;      // connect the child to the node (double connection complete at this point)
            // child = node.child;       //store the child
            // node.child = null;        // nullify the child (this line is not used)
            traverse(node.child);        // traverse the child; (thsi line is not used)
            node.child = null;           // nullify the downward child in the current node (the child is now connected to the right)
//         *** Getting rid of the child variable increases the speed by 30%
        }
        else {
            if(node.next) {         // if the current node does not have a child, check whether it has a next reference
                traverse(node.next);    // if so, traverse the next node)
            } 
            else {                          // if the current node does not have a child and does not have a next reference, it means it is the last node in the current ROW (LEVEL);
                reference = stack.pop();   // We want to retrieve the last pushed reference
                if(reference){                  //if there is a reference
                    node.next = reference;      // connect it to the current node
                    reference.prev = node;
                    traverse(node.next)         // traverse the reference
                }
            }   
        }   
    }
    traverse(head);
    return head;
};
