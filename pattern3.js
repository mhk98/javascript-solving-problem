// Rectangle

// const row = 5;
// const col = 4;
const n = 5;
let start = "";
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    start += "*";
  }
  start += "\n";
}

console.log(start);
