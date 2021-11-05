// Given a singly linked list, return a random node's 
// value from the linked list. Each node must have the same 
// probability of being chosen.

// Implement the Solution class:

// Solution(ListNode head) Initializes the object with the integer array nums.
// int getRandom() Chooses a node randomly from the list and returns its value. 
// All the nodes of the list should be equally likely to be choosen.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */


/**
 * @return {number}
 */

// Naive solution: iterate through the linkedList once to get the length;
//                  get a random number within the list's lenght
//                  iterate through the linkedList up to the random index obtained in previou step

// Time complexity: O(n)

var Solution = function(head) {
    this.list =  head;
};

 Solution.prototype.getRandom = function() {
    let max = 1;
    let current = this.list;
     while(current.next){
         current= current.next;
         max++;
     }
     let index = Math.floor(Math.random()*max);
     let j=0;
     let node = this.list;
     while(j < index){
         node = node.next;
         j++;
     }
     return node.val;
 };
 
 /** 
  * Your Solution object will be instantiated and called as such:
  * var obj = new Solution(head)
  * var param_1 = obj.getRandom()
  */
 
// ANOTHER SOLUTION

  Solution.prototype.getRandom = function() {
    let [count,result,node] = [1,null,this.list];
    while(node){
        // Say list has length of 10
        // As the list grows and approaches its final length;
        // the probality of choosing any element in the list becomes 1/10;
        // the probaliity of choosing the number zero is 1/10;
        // hence, if along the way of growing the list the number zero appears,
        // set the result equal to the node being iterated upon at the momennt
        if(Math.floor(Math.random()*count)==0) result = node.val;
        node= node.next;
        count++;
    }
    return result;
};