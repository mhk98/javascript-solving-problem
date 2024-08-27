// Rectangle

const row = 5;
const col = 4;
let start = "";
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    if (j == 1 || j == col) {
      start += "*";
    } else if (i == 1 || i == row) {
      start += "*";
    } else {
      start += " ";
    }
  }
  start += "\n";
}

console.log(start);
