const smallerNumbersThanCurrent = (nums) => {
  let ansArr = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[i] && j !== i) {
        count += 1;
      }

      ansArr[i] = count;
      count = 0;
    }
  }

  return ansArr;
};

let nums = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(nums));
