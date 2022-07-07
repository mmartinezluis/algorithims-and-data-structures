/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    let map = new Map();
    let current;
    let count = 1;
    let tempCount = 1;
    
    for(let i=0; i < nums.length; i++) {
      current = nums[i];
      map.set(current, (map.has(current) && [...map.get(current), i]) || [i]);
    }
  
    let backwardEl;
    let forwardEl;
    let backwardCount =0;
    let forwardCount = 0;
    
    while(count < [...map.keys()].length) {
      current = [...map.keys()][0];
      backwardEl = current - 1;
      forwardEl = current + 1;
  
      // backwards count;
      while(map.get(backwardEl)) {  
          backwardCount++;
          if(map.has(backwardEl).length > 1) {
            map.set(backwardEl, [1]);
            break;
          } else {
            map.delete(backwardEl);
            backwardEl-= 1;  
          }
      }
  
      // forward count;
      while(map.has(forwardEl)) {  
        forwardCount++;
        if(map.get(forwardEl).length > 1) {
          map.set(forwardEl, [1]);
          break;
        } else {
          map.delete(forwardEl)
          forwardEl+= 1;
        }
          
      }
  
      // if(map.get(current).length < 2) {
        tempCount = backwardCount + forwardCount +1;
      // } else tempCount = Math.max(backwardCount, forwardCount) +1;
  
      count = Math.max(tempCount, count);
      
      map.delete(current);
    }
    
    return count;
  };
  