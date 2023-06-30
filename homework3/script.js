let str = prompt("Введите строку:");
let maxlength = prompt("Введите максимальную длину строки:");


if (str.length > maxlength) {
  let dots = "…";
  str = str.substring(0, maxlength - dots.length) + dots.repeat(str.length - maxlength);
}

console.log(str);

