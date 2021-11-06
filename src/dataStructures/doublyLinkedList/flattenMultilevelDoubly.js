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