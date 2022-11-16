/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Strategy: use an algorithm to merge two sorted lists.
// Loop through the input list, and take two lists at a time;
// For each list pair, use the merge_two_lists algorithm and push the merged list
// to a queue; at the end of the loop, replace the input list with the queue,
// and loop again until queue has length 1
var mergeKLists = function(lists) {  
    while(lists.length > 1) {
        const merged_lists = [];
        for(let i = 0; i < lists.length; i += 2) {
            const union = merge_two_lists(lists[i], lists[i+1]);
            merged_lists.push(union);
        }
        lists = merged_lists;
    }
    return lists[0] || null;
}

function merge_two_lists(l1, l2) {
    let prehead = new ListNode();
    let head = prehead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 ? l1 : l2;
    return prehead.next;
}

function ListNode(val) {
    this.val = val !== undefined ? val : 0;
    this.next = null;
}