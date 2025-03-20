//if condition

let n="raj"
if(n=="raj")
{
    console.log("hello raj");
}

let age=20;
if(age>=18)
{
    console.log("you are eligible to vote");
}

//if-else

age=5;
if(age>=18)
{
    console.log("you are eligible to vote");
}
else
{
    console.log("you are not eligible to vote");
}

//if-else-if
n=5;
if(n>0)
{
    console.log(`${n} is positive`);
}
else if(n<0)
{
    console.log(`${n} is neagtive`);
}
else
{
    console.log(`${n} is neither postive nor negative`);
}

//take two numbers a,b and compare them and print the following status
//a is greater than b (or) bis grater than a (or) both are equal

let a=10,b=7;
if(a>b)
{
    console.log(`${a} is greater than ${b}`);
}
else if(a<b)
{
    console.log(`${b} is greater than ${a}`);
}
else
{
    console.log(`both ${a} and ${b} are equal`);
}

//switch
let user="student"
switch(user)
{
    case "admin":console.log("hello admin");break;
    case "parent":console.log("hello parent");break;
    case "teacher":console.log("hello teacher");break;
    case "student":console.log("hello student");break;
    default:console.log("please enter a valid input")
}
//write a switch case to print the day based on week number,week starts monday with value 1
let week=4
switch(week)
{
    case 1:console.log("monday");break;
    case 2:console.log("tuesday");break;
    case 3:console.log("wednesday");break;
    case 4:console.log("thursday");break;
    case 5:console.log("friday");break;
    case 6:console.log("saturday");break;
    case 7:console.log("sunday");break;
    default:console.log("please enter a valid input");
}