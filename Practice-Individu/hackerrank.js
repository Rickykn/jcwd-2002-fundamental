const vowelsAndConsonants = (s) => {
  let vowel = "aiueo";
  let consonant = "";

  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonant += `${s[i]} \n`;
    }
  }

  console.log(consonant.trim());
};

vowelsAndConsonants("javascriptloops");

function addBinary(a, b) {
  var sum = a + b,
    binary = "";

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
