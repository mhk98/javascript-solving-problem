const runningSum = (nums) => {
    let sum = 0;
  
    // Loop through the array to calculate the running sum
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]; // Add the current element to the sum
      nums[i] = sum;  // Update the current element with the running sum
    }
  
    return nums; // Return the modified array
  };
  
  let nums = [1, 2, 3, 4, 5];
  
  console.log(runningSum(nums)); // Output: [1, 3, 6, 10, 15]
  