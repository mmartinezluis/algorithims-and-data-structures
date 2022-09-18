# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    list1 = l1
    list2 = l2
    prehead = ListNode.new(0);
    curr = prehead
    carry_over = 0
    while list1 || list2
        sum = ((list1 && list1.val) || 0) + ((list2 && list2.val) || 0) + carry_over
        list1 = list1 ? list1.next : nil
        list2 = list2 ? list2.next : nil
        curr.next = ListNode.new(sum%10)
        curr = curr.next
        carry_over = ((sum/10)%10).floor
    end
    carry_over > 0 ? curr.next = ListNode.new(carry_over) : nil
    prehead.next
end


l1 = ListNode.new(2)
l1.next = ListNode.new(4)
l1.next.next = ListNode.new(3)
l2 = ListNode.new(5)
l2.next = ListNode.new(6)
l2.next.next = ListNode.new(4)

add_two_numbers(l1,l2)
