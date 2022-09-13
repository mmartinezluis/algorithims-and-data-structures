# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Void} Do not return anything, modify head in-place instead.
def reorder_list(head)
    slow = head
    fast = head
    while fast && fast.next
        slow = slow.next
        fast = fast.next.next
    end

    prev = nil
    current = slow
    while(current)
        temp = current.next
        current.next = prev
        prev = current
        current = temp 
    end
    second = prev

    merge_lists(head, prev, 1)
end

def merge_lists(list1, list2, token)
    return nil if !list1 || !list2
    if token > 0
        list1.next = merge_lists(list1.next, list2, -1)
        return list1
    elsif token < 0
        list2.next = merge_lists(list1, list2.next, 1)
        return list2
    end
end

    