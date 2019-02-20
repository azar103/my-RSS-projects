module.exports = function longestConsecutiveLength(array) {
  if(array.length === 0){ 
    return 0;
  }
  if(array.length === 1){ 
    return 1;
  }
  const arr = Array.from(new Set(array.sort((a,b)=>a - b)));
  let maxLength = 1;
  let currentLength = 1;
  for(let i = 1; i < arr.length; i++){
    if(arr[i-1]+1 == arr[i]){
       currentLength += 1;
    }
    else{
      if(currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 1;
    }
  }
  return maxLength;
}

// const arr = [100, 4, 200, 1, 3, 2];
// console.log(longestConsecutiveLength(arr));