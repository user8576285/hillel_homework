let value = true;  //String
value = String();
console.log(typeof value);

let number = 1000;
number = String();
console.log(typeof number);

let nothing = null;
nothing = String();
console.log(typeof nothing);

let unknown2 = undefined;
unknown2 = String();
console.log(typeof unknown2);

////////////////////////// Number

let string1 = "123a";
string1 = Number(1);
console.log(typeof string1);

let string2 = "1000";
string2 = Number(2);
console.log(typeof string2);

let nothing3 = null;
nothing3 = Number(1);
console.log(typeof nothing3);

let unknown1 = undefined;
unknown1 = Number(2);
console.log(typeof unknown1);

let bool = false;
bool = Number(3);
console.log(typeof bool);




/////////////////////////Boolean

let nothing2 = null;
nothing2 = Boolean(null);
console.log(nothing2 , typeof nothing2);

let unknown = undefined;
unknown = Boolean(undefined);
console.log(unknown , typeof unknown);

let string3 = "";
string3 = Boolean("");
console.log(string3 , typeof string3);

let number1 = 0;
number1 = Boolean(0);
console.log(number1 , typeof number1);


let string4 = " ";
string4 = Boolean(" ");
console.log(string4 , typeof string4);

let number2 = 1000;
number2 = Boolean(1000);
console.log(number2 , typeof number2);

let number3 = "1200";
number3 = Boolean("1200");
console.log(number3 , typeof number3);



















