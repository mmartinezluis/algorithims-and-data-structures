# @param {Integer} n
# @param {Integer[][]} edges
# @return {Boolean}
def valid_tree(n, edges)
    dsu = DSU.new(n)
    components = n
    edges.each do |edge|
        answer = dsu.union(edge[0], edge[1])
        return false if answer == 0
        components -= answer
    end
    components == 1 ? true : false
end

class DSU
    attr_accessor :parent, :rank

    def initialize(n)
        @parent = Array.new(n) {|i| i}
        @rank = Array.new(n) {1}
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
        return 0 if x == y
        if rank[x] > rank[y]
            parent[y] = x
        elsif rank[x] < rank[y]
            parent[x] = y
        else
            parent[y] = x
            rank[x] += 1
        end
        1
    end
end