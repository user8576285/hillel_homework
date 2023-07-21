// function addNumberPrefix(strings) {
//     return strings.map((str, index) => `${index + 1}: ${str}`);
//   }

const addNumberPrefix = (strings) => strings.map((str, index) => `${index + 1}: ${str}`);

console.log(addNumberPrefix([])); 
console.log(addNumberPrefix(["a", "b", "c"])); 
