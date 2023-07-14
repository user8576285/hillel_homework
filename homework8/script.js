const users = ["user", "user1", "user10", "user100", "user1000"];

users.forEach(function (item) {
  console.log(item);
});

const result = users.filter(function (item) {
  return item.length >= 6;
});
console.log(result);

const findElement = (user, element) => {
  return users.includes(element);
};
console.log(findElement(users, "user10"));

const result2 = users.find(function (str) {
  return str.length > 4;
});
console.log(result2);

function filterUsersByLength(users, length) {
  return users.filter((user) => user.length > length);
}

const result3 = filterUsersByLength(users, 5);
console.log(result3);
