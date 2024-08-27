function sum(params1, params2) {
  return params1 + params2;
}

console.log(sum(22, 20));

function totalsum(...params) {
  let total = 0;
  params.forEach((perElem) => {
    total += perElem;
  });

  return total;
}

console.log(totalsum(1, 2, 54, 124, 22));
