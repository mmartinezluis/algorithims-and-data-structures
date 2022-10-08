# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)  
    left = 0
    right = (nums.length) - 1
    rotation = find_rotation_index nums, 0, right
    if nums[rotation] == target
        return rotation
    end
    if rotation == 0
        return binary_search nums, 0, right, target
    else
        if target < nums[0]
            return binary_search nums, rotation, right, target
        else
            return binary_search nums, 0, rotation, target
        end
    end 
end

def binary_search nums, left, right, target
    while left <= right
        pointer = ((left + right)/2).floor
        if nums[pointer] == target
            return pointer
        end
        if target > nums[pointer]
            left = pointer + 1
        else
            right = pointer - 1
        end
    end
    -1
end

def find_rotation_index (arr, left, right)
    return 0 if arr[left] <= arr[right] 
    while left <= right
        pointer = ((left + right)/2).floor
        if arr[pointer] > arr[pointer +1]
            return pointer + 1
        end
        if arr[pointer] < arr[left]
            right = pointer - 1
        else
            left = pointer + 1
        end
    end
end


# find_rotation_index([0])
nums = [4,5,6,7,1,2,3]
nums = [5,1,3]
search(nums, 0)