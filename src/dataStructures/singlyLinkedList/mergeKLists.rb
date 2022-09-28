require 'byebug'
# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end
# @param {ListNode[]} lists
# @return {ListNode}
# Recursive; O(log k) space complexity
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

# Iterative solution; modifying the given list in place
def merge_k_lists2(lists)
    return nil if lists.length == 0
    k = lists.length
    w = k
    while w > 1
        w = (w.to_f/2).ceil
        i = 0
        w.times { |index|
            l1 = lists[i]
            l2 = i + 1 < k ? lists[i+1] : nil
            list = merge(l1, l2)
            lists[index] = list
            i +=2 
        }
        k = w
    end
    return lists[0]
end

# Iterative solution, log K space complexity
def merge_k_lists3(lists)
    return nil if lists.length == 0
    k = lists.length
    while k > 1
        mergedLists = []
        Range.new(0, k, true).step(2).each do |i|
            l1 = lists[i]
            l2 = lists[i+1]
            mergedLists << merge(l1, l2)
        end
        k = mergedLists.length
        lists = mergedLists
    end
    lists[0]
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

l1 = ListNode.new(1)
l1.next= ListNode.new(4)
l1.next.next  = ListNode.new(5)

l2 = ListNode.new(1)
l2.next = ListNode.new(3)
l2.next.next = ListNode.new(4)

l3 = ListNode.new(2)
l3.next = ListNode.new(6)

lists = [l1,l2,l3]

merge_k_lists3(lists)