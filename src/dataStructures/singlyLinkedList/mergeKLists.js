
// Definition for singly-linked list.
    function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
 
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if(!lists) return null;
    while(lists.length > 1) {
        const mergedLists = [];
        for(let i=0; i < lists.length; i+=2) {
            const l1 = lists[i];
            const l2 =  lists[i+1];
            mergedLists.push(merge(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0];
 }


function merge(l1, l2) {
    let prehead = new ListNode(0);
    let seed = prehead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            seed.next = l1;
            l1 = l1.next;
        } else {
            seed.next = l2;
            l2 = l2.next;
        }
        seed = seed.next;
    }
    seed.next = l1 ? l1 : l2;
    return prehead.next;
}

l1 = new ListNode(1)
l1.next= new ListNode(4)
l1.next.next  = new ListNode(5)

l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

merge(l1, l2)