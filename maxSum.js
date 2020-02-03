function maxSum(arr){

  let max_so_far = Math.min(...arr);
  let max_ending_here = 0;

  for (let i = 0; i < arr.length; i++) {
    max_ending_here += arr[i];
    
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }

  return max_so_far;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));