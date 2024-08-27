// const isPalindrome = (x) => {
//   let result = x.toString().split("").reverse().join("");

//   if (result === x) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome(12345));

const isPalindrome = (x) => {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let rev = 0;

  while (x > rev) {
    rev = rev * 10 + (x % 10);
  }

  return rev == x || x == Math.floor(rev / 10);
};

console.log(isPalindrome(12345));
