class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
    this.qty = 0;
  }

  calculateTotalPrice = () => {
    return this.price * this.qty;
  };
}

class Book extends Product {
  constructor(productName, price, author, pages) {
    super(productName, price);
    this.author = author;
    this.pages = pages;
  }
}

class Shirt extends Product {
  constructor(size) {
    this.size = size;
  }
}

console.log(new Book("Harry Potter", 8000, "J.K.Rowling", 762));

// class Product {
//   constructor(productName, price) {
//     this.productName = productName;
//     this.price = price;
//   }
//   calculateTotalPrice = () => {
//     return this.price * this.qty;
//   };

//   toMenuString = () => {
//     return `${this.productName} || Rp.${this.price.toLocaleString()} `;
//   };
// }

// class Book extends Product {
//   constructor(productName, price) {
//     super(productName, price);
//     this.quantity = 0;
//   }
// }

// let products = [
//   new Book("LOTR", 10000),
//   new Book("Harry Potter", 8000),
//   new Book("Sherlock", 12000),
//   new Book("Naruto", 15000),
// ];

// for (let i = 0; i < products.length; i++) {
//   console.log(`${i + 1}. ${products[i].toMenuString()}`);
// }
// // console.log(products);
// console.log(products[1].toMenuString());
