let score="33abc"

console.log(typeof score);
console.log(typeof (score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// When convert to Number
// "33" => 33
// null => 0
// undefined => NaN (Not a Number)
// true => 1; false => 0
// "33abc" => NaN

let valueLoggedIn = ""

let booleanIsLoggedIn = Boolean(valueLoggedIn)

console.log(booleanIsLoggedIn)


// In Blooean
// 1 => true; 0 => false
// "" => false
// "ravi" => true


let someNumber = 10

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)