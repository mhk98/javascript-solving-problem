let romanToInt = (s) => {
  let sum = 0;

  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    let currentEle = strArr[i];
    let currentNext = strArr[i + 1];

    if (roman[currentEle] < roman[currentNext]) {
      sum += roman[currentNext] - roman[currentEle];
      i++;
    } else {
      sum += roman[currentEle];
    }
  }

  return sum;
};
