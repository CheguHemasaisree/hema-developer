//arthametic operators

let a=5,b=10;
console.log(a+b); //15
console.log(a-b); //-5
console.log(a*b); //50
console.log(a/b); //0.5
console.log(a%b); //5



//relational operators

console.log(a>b);  //false
console.log(a<b);  //true
console.log(a>=b); //false
console.log(a<=b); //true
a=5,b='5';
console.log(a==b);  //true -- checks wheather a value is equal to b value and it wont check the datatypes
console.log(a===b); //false -- strict equals check wheather a value is equal to b value and it check datatypes
console.log(a!=b);  //false -- check wheather a value is equal to b value and it wont check datatypes 
console.log(a!==b); //true -- checks wheather a value is equal to b value and check datatypes

//logical operators -- they are used for logical conclusions
a=10,b=20;
console.log((a>5) && (b<50));  //true -- logical and is true when all of the conditions are true
console.log((a>5) || (b<50));  //true -- logical or is flase when all of the conditions are false
console.log(!(a>5)); //false -- logical not returns negoation of the result
