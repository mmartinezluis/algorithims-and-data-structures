# @param {Character[][]} grid
# @return {Integer}
def num_islands(grid)
    counter = 0
    grid.each_with_index do |row, i| 
        row.each_with_index do |column, j| 
            if grid[i][j] === "1"
                dfs(i,j, grid, nr, nc)
                counter+= 1
            end
        end
    end
    counter
end

def dfs(i, j, grid)
    nr = grid.length
    nc = grid[0].length
    grid[i][j] = "0"
    dfs(i+1, j, grid) if i + 1 < nr && grid[i+1][j] == "1"
    dfs(i-1, j, grid) if i - 1 >=0 && grid[i-1][j] == "1"
    dfs(i, j+1, grid) if j + 1 < nc && grid[i][j+1] == "1"
    dfs(i, j-1, grid) if j - 1 >= 0 && grid[i][j-1] == "1"
end