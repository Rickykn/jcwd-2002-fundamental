let books = [
  "LOTR",
  "HarryPotter",
  "Sherlock",
  "Naruto",
  "One Piece",
  "Doraemon",
];

// let searchText = "Naruto";
// let resultIndex;
// for (let i = 0; i < books.length; i++) {
//   if (books[i] === searchText) {
//     resultIndex = i;
//   }
// }

// console.log(resultIndex);

let numbers = [1, 15, 3];

numbers.sort(function (a, b) {
  return b - a;
});

console.log(numbers);
// books.push("The Hobbit");

// console.log(books);
// console.log(books[0]);

// array

const numbers = [1, 3, 4, 17, 21, 13, 2, 8, 40];

// cara hapus
// numbers.splice(3, 2);

// numbers.pop();

// console.log(numbers);
const sentence = "Halo selamat datang di rumah saya";

const words = sentence.split("a");

console.log(words);
