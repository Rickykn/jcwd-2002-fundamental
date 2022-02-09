let rows = 5;
let result = "";

let oddNumber = 1;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    result += `${oddNumber} `;
    oddNumber += 2;
  }
  result += "\n";
}
console.log(result);
