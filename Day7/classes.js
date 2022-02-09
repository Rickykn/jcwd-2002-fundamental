// cetakan untuk object/function

// class Car {
//   constructor(year, brand, color) {
//     this.year = year;
//     this.brand = brand;
//     this.color = color;
//   }
// }

// const mobilBaru = new Car("2000", "Toyota", "White");

// console.log(mobilBaru);

// const cars = [
//   new Car("2000", "Toyota", "White"),
//   new Car("2003", "Honda", "Red"),
// ];

class Product {
  constructor(productTitle, price) {
    this.productTitle = productTitle;
    this.price = price;
    this.quantity = 2;
    this.bought = 0;
  }

  calculateTotalPrice = function () {
    return this.price * this.quantity;
  };

  toString = () => {
    return `${this.productTitle} || Rp.${this.price} x ${
      this.quantity
    } => ${this.calculateTotalPrice()}`;
  };
}
let products = [new Product("LOTR", 10000), new Product("Harry Potter", 12000)];

console.log(products[0].toString());
