function sequence(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < inputArray[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(sequence([1, 2, 3, 4, 5]));
console.log(sequence([1, 2, 3, 4, 6]));
console.log(sequence([1, 2, 3, 4, 5]));
console.log(sequence([1, 2, 3, 7, 5]));
