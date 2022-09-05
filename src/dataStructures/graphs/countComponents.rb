# @param {Integer} n
# @param {Integer[][]} edges
# @return {Integer}

# Strategy: use disjoint set union (DSU); at the end,
# count he number of different parents: that will be 
# the number of diferent components (graphs)

def count_components(n, edges)
    dsu = DSU.new(n)
    components = n
    edges.each do |edge| 
        components -=1 if dsu.union(edge[0], edge[1]) 
    end
    components
end

class DSU
    attr_accessor :parent, :rank

    def initialize(n)
        @parent = Array.new(n) {|i| i}
        @rank = Array.new(n) {0}
    end

    def find(x)
        if parent[x] != x
            parent[x] = find(parent[x])
        end
        parent[x]
    end

    def union(x, y)
        x = find(x)
        y = find(y)
        return false if x == y
        if rank[x] > rank[y]
            parent[y] = x
        elsif rank[x] < rank[y]
            parent[x] = y
        else
            parent[y] = x
            rank[x] += 1
        end
        true
    end
end

n = 4
edges = [[1,0],[2,0],[3,1],[3,2]]
# Expected output: 1

n = 5
edges = [[0,1],[1,2],[3,4]]
# Expected output: 2

n = 5 
edges = [[0,1],[1,2],[2,3],[3,4]]
# Expected output: 1

count_components(n, edges)