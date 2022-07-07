function getDigit(num, index){
  return Math.floor(Math.abs(num)/(10**index) % 10)
}

function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) +1;
}

function maxDigit(arr){
  let maximum = 0
  for(let i = 0; i < arr.length; i++){
      maximum = Math.max(maximum, digitCount(arr[i]));
  }
  return maximum;
}


function radixSort(arr){
let digits = maxDigit(arr);
for(let k=0; k < digits; k++){
  let digitBuckets = Array.from({length: 10}, () => [])
  for(let i =0; i < arr.length; i++)  {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
  }
  arr = [].concat(...digitBuckets)
}
return arr
}
let arr = [100,4,200,1,3,2, -1]
console.log(radixSort(arr))