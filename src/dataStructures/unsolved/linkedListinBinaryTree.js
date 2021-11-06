// Given a binary tree root and a linked list with head as the first node. 

// Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

// In this context downward path means a path that starts at some node and goes downwards.


// This code passes 63/67 cases in leetCode; needs improvement;
// THIS CODE DOES NOT PASS ALL TEST CASES;
var isSubPath = function(head, root) { 
    let list = head
    let node = root;
    let map;
    function traverseTree(node, list){       
        if(node.val === list.val ){
            list = list.next;       
        } 
        else {
            list = head;
        }        
        if(!list) return map= true;
        if(node.left) traverseTree(node.left, list) 
        if(node.right) traverseTree(node.right, list);   
    }
     traverseTree(node, list);
     return !!map;
};