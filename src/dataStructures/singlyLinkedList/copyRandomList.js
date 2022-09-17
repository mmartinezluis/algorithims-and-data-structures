/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {

    let curr = head;
    let copy = new Node(0);
    let final = copy;
    let randomMap = new Map();

    while(curr) {
        if(!randomMap.has(curr)) {
            copy.next = new Node(curr.val);
            randomMap.set(curr, copy.next);
        } else {
            copy.next = randomMap.get(curr);
        }
        copy = copy.next;

        if(curr.random) {
            if(!randomMap.has(curr.random)) {
                copy.random = new Node(curr.random.val);
                randomMap.set(curr.random, copy.random);
            } else {
                copy.random = randomMap.get(curr.random);
            }
        }
        curr = curr.next;
    }

    return final.next;
};


function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


// Example(s):
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

let head = new Node(7);
const second = new Node(13);
second.random = head;
head.next = second;
const third = new Node(11);
second.next = third;
const fourth = new Node(10);
fourth.random = third;
third.next = fourth;
const fifth = new Node(1);
fifth.random = head;
fourth.next = fifth;
third.random = fifth;

copyRandomList(head)
