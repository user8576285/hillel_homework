const users = ["user1", "user2", "user3", "user4", "user5", "user6"];

const result = users.every((item) => item.length > 4);
console.log(result);

const result2 = users.some((item) => item.length > 4);
console.log(result2);

const result3 = users.map(function (item) {
    return item.toUpperCase();
});
console.log(result3);
