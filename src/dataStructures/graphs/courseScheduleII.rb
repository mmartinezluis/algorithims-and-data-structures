# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Integer[]}

WHITE = 1
GRAY = 2
BLACK = 3
# Ruby, using DFS
def find_order(num_courses, prerequisites)
    support = Support.new(num_courses)
    prerequisites.each do |pre|
        src = pre[1]
        dest = pre[0]
        support.adj_list[src] ? support.adj_list[src] << dest : support.adj_list[src] = [dest]
    end

    num_courses.times do |i|
        support.dfs(i) if support.color[i] == WHITE
    end

    if support.is_possible
        order = Array.new(num_courses)
        num_courses.times do |i|
            order[i] = support.topological_order[num_courses - i -1]
        end
    else
        order = []
    end
    p order 
end

class Support
    attr_accessor :color, :adj_list, :is_possible
    attr_reader :topological_order
    
    def initialize(num_courses)
        @is_possible = true
        @color = {}
        @adj_list = {}
        @topological_order = []
        num_courses.times do |i|
            @color[i] = WHITE
        end
    end

    def dfs(node)
        return if !is_possible
        color[node] = GRAY
        (adj_list[node] || []).each do |neighbor|
            if color[neighbor] == WHITE
                dfs(neighbor)
            elsif color[neighbor] == GRAY
                @is_possible = false
            end
        end
        color[node] = BLACK
        topological_order << node
    end
end

num_courses = 4
prerequisites = [
    [1,0],[2,0],[3,1],[3,2]
]
# find_order(num_courses, prerequisites)




# JAVA solution, DFS
# class Solution {
#   static int WHITE = 1;
#   static int GRAY = 2;
#   static int BLACK = 3;

#   boolean isPossible;
#   Map<Integer, Integer> color;
#   Map<Integer, List<Integer>> adjList;
#   List<Integer> topologicalOrder;

#   private void init(int numCourses) {
#     this.isPossible = true;
#     this.color = new HashMap<Integer, Integer>();
#     this.adjList = new HashMap<Integer, List<Integer>>();
#     this.topologicalOrder = new ArrayList<Integer>();

#     # By default all vertces are WHITE
#     for (int i = 0; i < numCourses; i++) {
#       this.color.put(i, WHITE);
#     }
#   }

#   private void dfs(int node) {

#     # Dont recurse further if we found a cycle already
#     if (!this.isPossible) {
#       return;
#     }

#     # Start the recursion
#     this.color.put(node, GRAY);

#     #  Traverse on neighboring vertices
#     for (Integer neighbor : this.adjList.getOrDefault(node, new ArrayList<Integer>())) {
#       if (this.color.get(neighbor) == WHITE) {
#         this.dfs(neighbor);
#       } else if (this.color.get(neighbor) == GRAY) {
#         #  An edge to a GRAY vertex represents a cycle
#         this.isPossible = false;
#       }
#     }

#     # Recursion ends. We mark it as black
#     this.color.put(node, BLACK);
#     this.topologicalOrder.add(node);
#   }

#   public int[] findOrder(int numCourses, int[][] prerequisites) {

#     this.init(numCourses);

#     # Create the adjacency list representation of the graph
#     for (int i = 0; i < prerequisites.length; i++) {
#       int dest = prerequisites[i][0];
#       int src = prerequisites[i][1];
#       List<Integer> lst = adjList.getOrDefault(src, new ArrayList<Integer>());
#       lst.add(dest);
#       adjList.put(src, lst);
#     }

#     # If the node is unprocessed, then call dfs on it.
#     for (int i = 0; i < numCourses; i++) {
#       if (this.color.get(i) == WHITE) {
#         this.dfs(i);
#       }
#     }

#     int[] order;
#     if (this.isPossible) {
#       order = new int[numCourses];
#       for (int i = 0; i < numCourses; i++) {
#         order[i] = this.topologicalOrder.get(numCourses - i - 1);
#       }
#     } else {
#       order = new int[0];
#     }

#     return order;
#   }
# }


# Ruby, using Khan's algorithm
def find_order(num_courses, prerequisites)
    adj_list = {}
    indegree = Array.new(num_courses) {0}
    topological_order = []
    queue = []

    prerequisites.each do |pre|
        src = pre[1]
        dest = pre[0]
        adj_list[src] ? adj_list[src] << dest : adj_list[src] = [dest]
        indegree[dest] +=1
    end

    num_courses.times {|i| queue << i if indegree[i] == 0}
    
    while !queue.empty?
        node = queue.shift
        (adj_list[node] || []).each do |neighbor|
            indegree[neighbor] -=1
            queue << neighbor if indegree[neighbor] == 0
        end
        topological_order << node
    end
    num_courses == topological_order.length ? topological_order : []
end  

find_order(num_courses, prerequisites)


# Java, Khan's algorithm
# class Solution {
#   public int[] findOrder(int numCourses, int[][] prerequisites) {

#     boolean isPossible = true;
#     Map<Integer, List<Integer>> adjList = new HashMap<Integer, List<Integer>>();
#     int[] indegree = new int[numCourses];
#     int[] topologicalOrder = new int[numCourses];

#     # Create the adjacency list representation of the graph
#     for (int i = 0; i < prerequisites.length; i++) {
#       int dest = prerequisites[i][0];
#       int src = prerequisites[i][1];
#       List<Integer> lst = adjList.getOrDefault(src, new ArrayList<Integer>());
#       lst.add(dest);
#       adjList.put(src, lst);

#     #   Record in-degree of each vertex
#       indegree[dest] += 1;
#     }

#     # Add all vertices with 0 in-degree to the queue
#     Queue<Integer> q = new LinkedList<Integer>();
#     for (int i = 0; i < numCourses; i++) {
#       if (indegree[i] == 0) {
#         q.add(i);
#       }
#     }

#     int i = 0;
#     # Process until the Q becomes empty
#     while (!q.isEmpty()) {
#       int node = q.remove();
#       topologicalOrder[i++] = node;

#     #   Reduce the in-degree of each neighbor by 1
#       if (adjList.containsKey(node)) {
#         for (Integer neighbor : adjList.get(node)) {
#           indegree[neighbor]--;

#         #    If in-degree of a neighbor becomes 0, add it to the Q
#           if (indegree[neighbor] == 0) {
#             q.add(neighbor);
#           }
#         }
#       }
#     }

#     # Check to see if topological sort is possible or not.
#     if (i == numCourses) {
#       return topologicalOrder;
#     }

#     return new int[0];
#   }
# }