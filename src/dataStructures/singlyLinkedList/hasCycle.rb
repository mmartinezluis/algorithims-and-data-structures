# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
    hash = {}
    while head
        if !hash[head]
            hash[head] = :a
        else
            return true
        end
        head = head.next
    end
    false
end

# Constant space complexity
def hasCycle(head)
    dummy = ListNode.new(0)
    dummy.next = head
    pointer = dummy
    curr = dummy
    while pointer && pointer.next
        pointer = pointer.next.next
        curr = curr.next
        return true if pointer == curr
    end
    false
end