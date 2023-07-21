const countPositiveAndNegative = (arr) => arr? [
        arr.filter((num) => num > 0).length,
        arr.reduce((sum, num) => sum + (num < 0 ? num : 0), 0),] : [];


console.log(countPositiveAndNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,]));
console.log(countPositiveAndNegative([]));
