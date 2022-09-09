# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    node1 = list1
    node2 = list2
    return nil if !node1 && !node2
    return node1 if node1 && !node2
    return node2 if !node1 && node2
    root = node2.val >= node1.val ? ListNode.new(node1.val) : ListNode.new(node2.val)

    while node1 && node2
        if node1.val <= node2.val
            if node1.next && node1.next.val <= node2.val
                root.next = node1.next
                node1 = node1.next
            end
        else
            root.next = node2
            node2 = node2.next
        end
    end
        
    root.next = !node1 ? node2.next : node1.next
    root
end