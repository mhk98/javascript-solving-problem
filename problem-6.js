//Minimum sum of four digit number after spliting number --------- Leetcode (2160)

var minimumSum = (num) => {
  const arr = num.toString().split("").sort();

  return Number(arr[0] + arr[3]) + Number(arr[1] + arr[2]);
};

console.log(minimumSum(2932));
