let a=5;
console.log(typeof a);  //number

let b="Prasad"
console.log(typeof b);  //string

let c=true;
console.log(typeof c);  //boolean

//implict type casting
let d=5+"5";
console.log(d,typeof d); //55,string

let e="prasad"+2;
console.log(e, typeof e); //prasad2,string

let f=1+true;
console.log(f,typeof f); //2,number


//numbers
let p=25-'p';
console.log(p,typeof p); //nan number
p=5.4123;
console.log(p.toFixed(2)); //5.41
p=25;
console.log(p.toString(2)); //11001 -- string
p=5+ + '5';
console.log(p); //10 -- number

//math methods
console.log(Math.sqrt(16)); //4 -- squareroot
console.log(Math.cbrt(27)); //3 -- cube root
console.log(Math.abs(-10)); //10 --absolute
console.log(Math.max(5,1,3,4,6)); //6 -- maximum
console.log(Math.min(3,4,2,1,8)); //1 -- minimum
console.log(Math.ceil(4.1)); //5 -- ceiling
console.log(Math.floor(4.8)); //4 -- floor
console.log(Math.round(4.8)); //5 -- round
console.log(Math.random()); //0.4068932579918074 -- returns a random number between 0 to 1(generates a random number between 0 to1 after evey refresh)
console.log(Math.random()*1000); //656.5240493810276 -- after generating the random numer we are multiplying that number with 1000
console.log(Math.round(Math.random()*1000)); //675 -- after generating the random number we are multyplying the random number with 1000 and rounding of that number
console.log(Math.pow(2,3)); //8 -- power
console.log(Math.pow(2,3), 2**3) //8,8 --power can also be return in this way also

//strings
let q="prasad";
console.log(typeof q,q); //string prasad
q=25;
console.log("the value of q is q"); //the value of q is q
console.log("the value of q is" + q); //the value of q is 25
console.log(`the value of q is $ {q}`); //25

let cost = 4, tax = 5,quantity=10
console.log(`The Total of buying ${quantity} apples with 
    each cost ${cost} is ${quantity * cost} but also adds
     the tax of ${tax} is ${(tax/100)*(cost*quantity)} `);

//there are so many string methods into javascript

let str="prasad";
console.log(str.length); //6 -- length
console.log(str[0]); //p -- array
console.log(str[0]+str[1]);  //pr -- string concatenation
console.log(str.toUpperCase()); //PRASAD -- uppercase
console.log(str.toLowerCase()); //prasad -- lowercase
console.log(str.startsWith("pr")); //true -- startWith
console.log(str.endsWith("ke"));  //false -- endsWith
console.log(str.indexOf('s')); // 3 -- index of the letter
console.log(str.indexOf('a')); //2
console.log(str.indexOf('a'), str.lastIndexOf('a')); //2 4
console.log(str.indexOf('a',3),str.lastIndexOf('a')); //4 4
str="js is so easy";
console.log(str.split(' ')); //['js', 'is', 'so', 'easy'] -- split
console.log(str.split('')); //['j', 's', ' ', 'i', 's', ' ', 's', 'o', ' ', 'e', 'a', 's', 'y']
console.log(str.slice(2,5)); //is
console.log("      prasad      " .trim()); //prasad -- trim
console.log("    durga   Prasad    ".trim()); //durga parasd

//undefined
let k;
console.log(k);  // undefined
console.log(k,typeof k); // undefined 'undefined'
//console.log(z); //error

//null
let n=null;
console.log(n);
//hoisting
console.log(m); //undefined
var m=5;


