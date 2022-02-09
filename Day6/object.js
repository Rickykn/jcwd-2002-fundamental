// const book = {
//   title: "Harry Potter",
//   author: {
//     name: "J. K. Rowling",
//     age: 50,
//     nationality: "Inggris",
//   },
//   pages: 658,
//   yearReleased: "2001",
//   alternativeTitle: ["Sang Penyihir", "The Wizard"],
//   sequels: [
//     {
//       title: "harry potter 2",
//       yearReleased: "2003",
//     },
//     {
//       title: "harry potter 3",
//       yearReleased: "2005",
//     },
//     {
//       title: "harry potter 4",
//       yearReleased: "2007",
//     },
//   ],
// };

// // object destructuring
// let { yearReleased, title } = book;
// console.log(yearReleased);
// console.log(title);

// dot notation
// console.log(book.author.nationality);

// // bracket notation
// console.log(book["title"]);

// Nambah Properti
// book.publisher = "purwadhika";

// Hapus Properti
// delete book.title;

// let products = [
//   {
//     nama: "Leci",
//     price: 3000,
//   },
//   {
//     nama: "mangga",
//     price: 4000,
//   },
//   {
//     nama: "apel",
//     price: 5000,
//   },
// ];

// let result = "";
// for (let i = 0; i < products.length; i++) {
//   result += `nama: ${products[i].nama} || price: ${products[
//     i
//   ].price.toLocaleString()}\n`;
// }

// console.log(result);

// console.log(book);

// const cars = [
//   {
//     brand: "Toyota",
//     year: "2010",
//     colors: ["Red", "Black"],
//   },
//   {
//     brand: "Honda",
//     year: "2007",
//     colors: ["Grey", "Black", "White"],
//   },
// ];

// let result = "";
// for (let i = 0; i < cars.length; i++) {
//   result += `brand: ${cars[i].brand} || year: ${cars[i].year} || colors: `;
//   for (let j = 0; j < cars[i].colors.length; j++) {
//     result += `${cars[i].colors[j]} `;
//   }
//   result += "\n";
// }

// console.log(result);
