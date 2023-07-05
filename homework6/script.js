const BiggerNumber = (a, b) => {
  return Math.max(a, b);
};
console.log(BiggerNumber(100, 10));

const checkAge = (age) => {
  if (age <= 18) {
    return false;
  } else {
    return true;
  }
};
console.log(checkAge(20));
console.log(checkAge(15));

const stringCut = () => {
  let str = prompt("Введите строку:");
  let maxlength = prompt("Введите максимальную длину строки:");

  if (str.length > maxlength) {
    let dots = "…";
    str =
      str.substring(0, maxlength - dots.length) +
      dots.repeat(str.length - maxlength);
  }

  console.log(str);
};
stringCut();

const checkWord = (string, word) => {
  return string.includes(word);
};

console.log(checkWord("Hello, world!", "world"));
console.log(checkWord("Hello, world!", "word"));
