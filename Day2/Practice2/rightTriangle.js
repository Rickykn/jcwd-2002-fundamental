let rows = 5;
let columns = 5;
for (let i = 1; i <= rows; i++) {
  let result = "";
  for (let j = columns; j >= 1; j--) {
    if (j <= i) {
      result += "*";
    } else {
      result += " ";
    }
  }
  console.log(result);
}
