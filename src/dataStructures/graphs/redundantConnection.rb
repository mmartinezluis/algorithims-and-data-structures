# JAVA
# class Solution {
#     Set<Integer> seen = new HashSet();
#     int MAX_EDGE_VAL = 1000;

#     public int[] findRedundantConnection(int[][] edges) {
#         ArrayList<Integer>[] graph = new ArrayList[MAX_EDGE_VAL + 1];
#         for (int i = 0; i <= MAX_EDGE_VAL; i++) {
#             graph[i] = new ArrayList();
#         }

#         for (int[] edge: edges) {
#             seen.clear();
#             if (!graph[edge[0]].isEmpty() && !graph[edge[1]].isEmpty() &&
#                     dfs(graph, edge[0], edge[1])) {
#                 return edge;
#             }
#             graph[edge[0]].add(edge[1]);
#             graph[edge[1]].add(edge[0]);
#         }
#         throw new AssertionError();
#     }
#     public boolean dfs(ArrayList<Integer>[] graph, int source, int target) {
#         if (!seen.contains(source)) {
#             seen.add(source);
#             if (source == target) return true;
#             for (int nei: graph[source]) {
#                 if (dfs(graph, nei, target)) return true;
#             }
#         }
#         return false;
#     }
# }


# RUBY code from Java
# Working solution
# @param {Integer[][]} edges
# @return {Integer[]}
def find_redundant_connection(edges)
    @seen = {}
    max_edge_val = 1000
    results = []
    @graph = Array.new(max_edge_val + 1) {Array.new}
    edges.each do |edge|
        @seen = {}
        results << edge if !@graph[edge[0]].empty? && !@graph[edge[1]].empty? && dfs(edge[0], edge[1])
        @graph[edge[0]] << edge[1]
        @graph[edge[1]] << edge[0]
    end
    results[-1]
end

def dfs(source, target)
    if !@seen[source]
        @seen[source] = true
        return true if source == target
        @graph[source].each do |nei|
            return true if dfs(nei, target)
        end
    end
    false
end

edges = [
    [1,2], [3,4], [5,6], [7,8], [2,4], [2,5], [1,3], [6,8], [5,7]
]

# find_redundant_connection(edges)




# PYTHON
# Function for DFS_Traversal traversal
# def DFS_Traversal(graph, v, visited, parent_node=-1):
#     # assign current node as
#     visited[v] = True
#     # loop for every edge (v, u)
#     for u in graph.adjacencyList[v]:
#         # if `u` is not visited
#         if not visited[u]:
#             if DFS_Traversal(graph, u, visited, v):
#                 return True
#         # if `u` is visited, and `u` is not a parent_node
#         elif u != parent_node:
#             # found a back-edge 
#             return True
#     # No back-edges were found 
#     return False


# ****************************

# PYTHON
# class DSU(object):
#     def __init__(self):
#         self.par = range(1001)
#         self.rnk = [0] * 1001

#     def find(self, x):
#         if self.par[x] != x:
#             self.par[x] = self.find(self.par[x])
#         return self.par[x]

#     def union(self, x, y):
#         xr, yr = self.find(x), self.find(y)
#         if xr == yr:
#             return False
#         elif self.rnk[xr] < self.rnk[yr]:
#             self.par[xr] = yr
#         elif self.rnk[xr] > self.rnk[yr]:
#             self.par[yr] = xr
#         else:
#             self.par[yr] = xr
#             self.rnk[xr] += 1
#         return True

# class Solution(object):
#     def findRedundantConnection(self, edges):
#         dsu = DSU()
#         for edge in edges:
#             if not dsu.union(*edge):
#                 return edge
                
# ****************************


# Alternate Implementation of DSU without Union-By-Rank
# PYTHON
# class DSU:
#     def __init__(self):
#         self.par = range(1001)
#     def find(self, x):
#         if self.par[x] != x:
#             self.par[x] = self.find(self.par[x])
#         return self.par[x]
#     def union(self, x, y):
#         self.par[self.find(x)] = self.find(y)


# **************************

# JAVA
# class Solution {
#     int MAX_EDGE_VAL = 1000;

#     public int[] findRedundantConnection(int[][] edges) {
#         DSU dsu = new DSU(MAX_EDGE_VAL + 1);
#         for (int[] edge: edges) {
#             if (!dsu.union(edge[0], edge[1])) return edge;
#         }
#         throw new AssertionError();
#     }
# }

# class DSU {
#     int[] parent;
#     int[] rank;

#     public DSU(int size) {
#         parent = new int[size];
#         for (int i = 0; i < size; i++) parent[i] = i;
#         rank = new int[size];
#     }

#     public int find(int x) {
#         if (parent[x] != x) parent[x] = find(parent[x]);
#         return parent[x];
#     }

#     public boolean union(int x, int y) {
#         int xr = find(x), yr = find(y);
#         if (xr == yr) {
#             return false;
#         } else if (rank[xr] < rank[yr]) {
#             parent[xr] = yr;
#         } else if (rank[xr] > rank[yr]) {
#             parent[yr] = xr;
#         } else {
#             parent[yr] = xr;
#             rank[xr]++;
#         }
#         return true;
#     }
# }

# **********************

# Ruby code from Java
def find_redundant_connection2(edges)
    max_edge_val = 1000
    DSU.dsu(max_edge_val + 1)
    results = []
    edges.each do |edge|
        results << edge if !DSU.union(edge[0], edge[1])
    end
    results[-1]
end

module DSU
    @parent
    @rank
    
    def self.dsu(size)
        @parent = Array.new(size) {|i| i}
        @rank = Array.new(size) { 0 }
    end
   
    def self.find(x)
        if @parent[x] != x
            @parent[x] = find(@parent[x]) 
        end
        @parent[x]
    end

    def self.union(x, y)
        xr = find(x)
        yr = find(y)
        if xr == yr 
            return false
        elsif @rank[xr] < @rank[yr]
            @parent[xr] = yr
        elsif @rank[xr] > @rank[yr]
            @parent[yr] = xr
        else
            @parent[yr] = xr
            @rank[xr] += 1
        end
        true
    end
end

# find_redundant_connection2(edges)
