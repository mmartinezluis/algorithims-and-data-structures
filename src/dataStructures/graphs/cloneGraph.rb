# Definition for a Node.
# class Node
#     attr_accessor :val, :neighbors
#     def initialize(val = 0, neighbors = nil)
#		  @val = val
#		  neighbors = [] if neighbors.nil?
#         @neighbors = neighbors
#     end
# end

# @param {Node} node
# @return {Node}
def cloneGraph(node)
    return if !node
    map = {};
    main = Node.new(node.val)
    map[node.val] = main
    dfs(node, main, map)
    main
end

def dfs(node, main, map)
    node.neighbors.each do |neighbor, index| 
        if !map[neighbor.val]
            newNode = Node.new(neighbor.val)
            main.neighbors.push(newNode)
            map[newNode.val] = newNode
            dfs(neighbor, newNode, map)
        else 
            main.neighbors.push(map[neighbor.val])
        end
    end
end
