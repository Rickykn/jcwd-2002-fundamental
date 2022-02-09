// const product = {
//   productName: "LOTR",
//   price: 10000,
//   quantity: 0,
// };

// const newProduct = {
//   ...product,
// };

// product.price = 9999;
// product.quantity = 100;

// console.log(newProduct);
// console.log(product);

function vowelsAndConsonants(s) {
  let str = s;
  let vowel = "";
  let consonant = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "i" ||
      str[i] == "u" ||
      str[i] == "e" ||
      str[i] == "o"
    ) {
      // console.log(str[i]);
      vowel += str[i] + "\n";
    } else if (
      !(
        str[i] == "a" ||
        str[i] == "i" ||
        str[i] == "u" ||
        str[i] == "e" ||
        str[i] == "o"
      )
    ) {
      // console.log(str[i]);
      consonant += str[i] + "\n";
    }
  }

  let result = vowel + consonant;
  return result;
}

console.log(vowelsAndConsonants("javascriptloops"));
