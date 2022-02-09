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
