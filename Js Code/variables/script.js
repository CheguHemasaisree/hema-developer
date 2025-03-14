//var

function x(){
    if(true){
        console.log(a);//using the variable before inziliation
        var a=5;//assign of variable
        var a=25;//redeclaration of variable
        a=10;//re-assigning of a varaiable
    }
    console.log(a);
}
x();

//let and const

function x(){
    if(true){
        //console.log(a);//using the variable before intilization throws an error
        let a=5;//assign the variable to let
        a=20;//re-assigning of the variable to let
        const b=50;//assigning the varaible to const
        //const b=30;//redeclaration of the varaiable to const throws an error
        //b=40;//re-assigning the variable to const
        console.log(a,b);
    }
}
x();

//basic default functionalities used by the browser

//alert
alert("happy holi");
alert("login sucessfully");

//confirm
confirm("are you sure you wnat to reload the page");
let x=confirm("are you sure you want to delete the page");
console.log(x);

