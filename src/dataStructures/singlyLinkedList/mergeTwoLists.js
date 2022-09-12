/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Using recursion
 var mergeTwoLists = function(list1, list2) {
    if(!list1) {
        return list2;
    } else if(!list2) {
        return list1;
    } else if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2;
    }
};


// Iterative solution
var mergeTwoLists2 = function(list1, list2) {

    let temp1 = list1;
    let temp2 = list2;
    if(!temp1) return list2;
    if(!temp2) return list1;

    let reference;
    if(temp1.val <= temp2.val) {
        reference = temp1;
        temp1 = temp1.next; 
    } else {
        reference = temp2;
        temp2 = temp2.next;
    }
    start = reference;

    while(temp1 && temp2) {

        if(temp1.val <= temp2.val) {
            reference.next = temp1;
            temp1 = temp1.next;
        } else {
            reference.next = temp2;
            temp2 = temp2.next;
        }
        reference = reference.next;
    }

    reference.next = !temp1? temp2 : temp1;
    console.log(JSON.stringify(start, null, 2))
    return start;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let list1 = new ListNode(2, new ListNode(5));
let list2 = new ListNode(1, new ListNode(20));




// Using iteration
var mergeTwoLists3 = function(list1, list2) {
    let prehead = new ListNode(-1);
    let prev = prehead;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    prev.next = !list1 ? list2 : list1;
    console.log(JSON.stringify(prehead.next, null, 2))
    return prehead.next;
}

mergeTwoLists3(list1, list2)