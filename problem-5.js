// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two

function primesum(num) {
  let primetotal = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j < num; j++) {
      if (i === j) {
        primetotal += i;
      }

      if (i % j === 0) {
        break;
      }
    }
  }

  return primetotal;
}

console.log(primesum(10));
