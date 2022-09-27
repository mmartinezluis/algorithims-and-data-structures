# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
    return nil if lists.length == 0
    return lists[0] if lists.length == 1
    i=0
    queue = []
    while i < lists.length 
        queue.push(merge(lists[i], lists[i+1]))
        i +=2
    end
    return merge_k_lists(queue)
end

def merge(l1, l2)
    return l2 if !l1
    return l1 if !l2
    if l1.val < l2.val
        l1.next = merge(l1.next, l2)
        return l1
    else
        l2.next = merge(l1, l2.next)
        return l2
    end
end