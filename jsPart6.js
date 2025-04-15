// function hello() {
//     console.log("hello");
// }

// hello();

// function print1to5(){
//     for(let i=0;i<=5;i++){
//         console.log(i);
//     }
// }

// print1to5();

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));
// console.log(sum(sum(1,2),3));

// let sum =54; //Global scope
// function calSum(a,b) {
//     let sum = a +b;
//     console.log(sum); //Function scope
// }

// calSum(5,8);
// console.log(sum);

function outerFun(){
    let x=8;
    let y =5;
    function innerfun(){
        console.log(x);
    }
    innerfun();
}

let x=9;
let y=4;

let sum = function(a,b){
    return a+b;
}


let greet = function(){
    console.log("hello");
}

function multigreet(fun,count){
    for(let i =0; i<=count; i++){
        fun();
    }
}

multigreet(greet,10);
multigreet(function(){console.log("namaste")},100);

const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
    num : 55
};