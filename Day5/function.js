// function SumLowUpper(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   });

//   let hasil = 0;
//   for (let i = 0; i < arr.length; i++) {
//     hasil = arr[0] + arr[arr.length - 1];
//   }

//   return hasil;
// }

// let arrayNumber = [7, 2, -2, 4, 9, 3, 1];

// console.log(SumLowUpper(arrayNumber));

// function mumble(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;
// }

// let input = "hello";
// console.log(mumble(input));

// function displayMenu(name) {
//   console.log(`Hello ${name}!!`);
// }

// displayMenu("Ricky");

function displayData(itemNames = [], itemPrices = []) {
  let productList = "";
  for (let i = 0; i < itemNames.length; i++) {
    productList += `${i + 1}. ${itemNames[i]} || Rp.${itemPrices[
      i
    ].toLocaleString()}\n`;
  }
  return productList;
}

let books = ["One Piece", "Naruto"];
let priceBooks = [7000, 3000];

console.log(displayData(books, priceBooks));

function sumTwoNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Salah Cok";
  }

  let hasil = a + b;

  return hasil;
}

//==== Anonymous function ====//
const a = function () {};

//==== Arrow Function ====//
const b = () => {};

const tambah = (first, second, callback) => {
  return callback(first, second);
};

console.log(
  tambah(3, 5, (a, b) => {
    return a + b;
  })
);
