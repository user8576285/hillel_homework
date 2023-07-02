function BiggerNumber(){
    let a = 659443344554
    let b = 3484832333
   if (a < b){
    console.log (b)
   } else if (a > b)
   { console.log (a)}
   

}

BiggerNumber()

function checkAge(){
    const age = prompt("Введите возраст")
    if (age < 18){
        console.log(false)
    } else {  console.log(true)}
  
}
checkAge()

function stringCut(){
    let str = prompt("Введите строку:");
let maxlength = prompt("Введите максимальную длину строки:");


if (str.length > maxlength) {
  let dots = "…";
  str = str.substring(0, maxlength - dots.length) + dots.repeat(str.length - maxlength);
}

console.log(str);
} 
stringCut()

function checkWord(){
    const str1 = "eirogvieritrueword"
    const ifIncludes = str1.includes("word")
     console.log(ifIncludes)
   
}
checkWord()