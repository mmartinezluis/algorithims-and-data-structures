require 'pry'
# @param {Integer[][]} heights
# @return {Integer[][]}

# This solutions works, but is slow (exceeds time limit in LeetCode)
def pacific_atlantic(heights)
    result = []
    heights.each_with_index do |row, i|
        row.each_with_index do |column, j|
            map = Array.new(heights.length) {Array.new(heights[0].length, false)}
            track = { P: false, A: false}
            result << [i,j] if dfs(i,j,heights, map, track)
        end
    end
    binding.pry
    result
end

def directions
[
    [0,-1], [0,1], [-1,0], [1,0]
]
end

def dfs(i,j,heights, map, track)
    return true if track[:P] && track[:A] 
    map[i][j] = true
    directions.each do |dir|
        value = heights[i][j]
        x = i + dir[0]
        y = j + dir[1]
        # binding.pry
        if((x >= 0 && x < heights.length && y >= 0 && y < heights[0].length && value >= heights[x][y]) && !map[x][y])
            # binding.pry
            dfs(x, y, heights, map, track) 
        end
        track[:P] = true if x < 0 || y < 0
        track[:A] = true if x >= heights.length || y >= heights[0].length
        # binding.pry
        return true if track[:P] && track[:A] 
    end
    false
end



# def dfs(i,j,heights, map)
#     value = heights[i][j]
#     map[i][j] = true
#     return true if (i-1 < 0 && j+1) || 
#     left = j-1 < 0 ? true : ((value >= heights[i][j-1]) && !map[i][j-1]) ? dfs(i, j-1, heights, map) : false
    
#     right = j+1 >= heights[0].length ? true : ((value >= heights[i][j+1]) && !map[i][j+1]) ? dfs(i, j+1, heights, map) : false
    
#     up = i-1 < 0 ? true : ((value >= heights[i-1][j]) && !map[i-1][j]) ? dfs(i-1, j, heights, map) : false
    
#     down = i+1 >= heights.length ? true : ((value >= heights[i+1][j]) && !map[i+1][j]) ? dfs(i+1, j, heights, map) : false
    
#     result = (left && right) || (up && down) || (left && down) || (up && right)
    
#     result
# end

heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

pacific_atlantic(heights)



# def dfs(i,j,heights)
#     pacific(i,j,heights) && atlantic(i,j,heights)
# end

# def pacific(i,j,heights)
#     value = heights[i][j]
#     return true if i-1 < 0 || j-1 < 0
#     return (pacific(i-1,j,heights) || pacific(i,j-1,heights)) if value >= heights[i-1][j] && value >= heights[i][j-1]
#     return pacific(i-1,j,heights) if value >= heights[i-1][j] 
#     return pacific(i,j-1,heights) if value >= heights[i][j-1] 
#     false
# end

# def atlantic(i,j,heights)
#     value = heights[i][j]
#     return true if i+1 >= heights.length || j+1 >= heights[0].length
#     return (atlantic(i+1,j,heights) || atlantic(i,j+1,heights)) if value >= heights[i+1][j] && value >= heights[i][j+1]
#     return atlantic(i+1,j,heights) if value >= heights[i+1][j] 
#     return atlantic(i,j+1,heights) if value >= heights[i][j+1] 
#     false
# end