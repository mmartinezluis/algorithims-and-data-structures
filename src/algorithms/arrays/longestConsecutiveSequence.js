/**
 * @param {number[]} nums
 * @return {number}
 */

// This solution works
 var longestConsecutive = function(nums) {
    let map = {};
    let count = 0;
    
    for(let i=0; i < nums.length; i++) {
      current = nums[i];
      if(map[current]) continue;
      map[current] = true;
    }
      
    for(let key in map) {
      if(!map[key -1]) {
        let current = parseInt(key) +1;
        let tempCount = 1;
  
        while(map[current]){
          current += 1;
          tempCount++;
        }
        count = Math.max(tempCount, count)
      }
  
    }
  
    return count;
  };


// This solution runs out of time in LeetCode, although it seems to be a 
// subjectively fast solution as not all of the keys in the object are traversed
 var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    let map = {};
    let current;
    let count = 1;
    let tempCount = 0;
    
    for(let i=0; i < nums.length; i++) {
      current = nums[i];
      if(map[current]) continue;
      map[current] = true;
    }
  
    let backwardEl;
    let forwardEl;
    let backwardCount = 0;
    let forwardCount = 0;
  
    let negativeCount = Object.keys(map).length;
    
    while(count < negativeCount) {
      current = parseInt(Object.keys(map)[0]);
      backwardEl = current - 1;
      forwardEl = current + 1;
  
      // backwards count;
      while(map[backwardEl]) {  
        backwardCount++;
        delete map[backwardEl];
        backwardEl--;  
        negativeCount--
      }
  
      // forward count;
      while(map[forwardEl]) {  
        forwardCount++;
        delete map[forwardEl];
        forwardEl++;
        negativeCount--
      }
  
      tempCount = backwardCount + forwardCount + 1;
      count = Math.max(tempCount, count);
  
      backwardCount = 0;
      forwardCount = 0;
      negativeCount--;
      delete map[current];
    }
    
    return count;
  };
  