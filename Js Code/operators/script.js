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

//assignment operators
a=5;
a+= 2;
console.log(a); //7
a-=2
console.log(a); //5(it is taking the previous value of a which is 7)
a*=2;
console.log(a); //10
a/=2;
console.log(a); //5
a%=2;
console.log(a); //1
a**=2;
console.log(a); //1

//increment and decrement operators
a=5;
a++; //post increment --> first assign and update
console.log(a); //6
++a; //pre increment -->first update and assign
console.log(a); //7
a=5;
let y=a++ +5; 
console.log(y); //10
y=++a +5;
console.log(y); //11
a=5;
y=a++ + ++a + a;
console.log(y); //19
a=2,b=3;
y=++a + a++ + a-- +--a;
console.log(y); //12

//urnary+ operator--in javascript urnary+ operator is used convert any value into number
console.log(5+ +'5') //5+5=10

//ternary operator (or) conditional operator
//(condition) ? value1:value2;
a=5;
let c=(a>2)?10:20;
console.log(c); //10 because condition is true
c=(a<2)?10:20;
console.log(c); //20 because condition is false

//optional chaining operator
b=5,c=10;
a=b??c; //it will choose b
console.log(a); //5
b=null;
a=b??c;
console.log(a); //10
//??operator lets you choose between two values if first value is undefined (or) null, then it choose first option else it choose second option

