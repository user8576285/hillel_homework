// const  findAverage = (numbers) =>{
//     if (numbers.length === 0) {
//       return 0;
//     }

//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     const average = sum / numbers.length;
//     return average;
//   }

const findAverage = (array) =>
    array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;


console.log(findAverage([2, 4, 8, 10, 20]));
console.log(findAverage([]));


