require 'pry'
# @param {Integer[][]} grid
# @return {Integer}
def max_area_of_island(grid)
    max_area = 0
    grid.each_with_index do |row, i| 
        row.each_with_index do |column, j| 
            if grid[i][j] == 1
                 value = dfs(i,j, grid, 1)
                 binding.pry
                 max_area = [value, max_area].max
            end
        end
    end
    max_area
end

def directions
    [
        [1,0], [-1,0], [0,1], [0, -1]
    ]
end

def dfs(i, j, grid, sum)
    nr = grid.length
    nc = grid[0].length
    grid[i][j] = 0 
    directions.each do |dir|
        newI = dir[0] + i
        newJ = dir[1] + j
        if newI >= 0 && newI < nr && newJ >=0 && newJ < nc && grid[newI][newJ] == 1
            sum = dfs(newI, newJ, grid, sum + 1)
        end
    end
    sum
end


grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],  		
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]

max_area_of_island(grid)