require 'pry'
# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Boolean}
def can_finish(num_courses, prerequisites)
    graph = {} 

    prerequisites.each do |pre|
        if !graph[pre[1]]
            graph[pre[1]] = [pre[0]]
        else
            graph[pre[1]].push(pre[0])
        end
    end

    visited = {}

    initial = graph.keys[0]
    dfs(initial, graph, visited, true)
end

def dfs(vertex, graph, visited, boolean)
    # binding.pry
    if graph[vertex]
        visited[vertex] = true
        graph[vertex].each do |neighbor|
            return false if visited[neighbor]
            return true && dfs(neighbor, graph, visited, boolean)
        end
    end
    true 
end

prerequisites = [
    ['B','A'],
    ['C','A'],
    ['B','C'],
    ['D','C'],
    ['E','D'],
    ['C','E']
]

print can_finish(0, prerequisites)