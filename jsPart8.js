let arr = [1,2,3,4,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
});
arr.forEach((el) =>{
    console.log(el);
});


let a =[{
    name: "harsh",
    marks: 90,
},
{
    name: "kiddo",
    marks: 97,
},
{
    name: "meow",
    marks: 100,
}];
a.forEach((student) =>{
    console.log(student.name);
});

let num = [1,2,3,4,5];
let double = num.map((el) => {
    return el*el;
});

let gpa = a.map((gpa) =>{
    return gpa.marks/10;
});




let number = [1,2,3,4,5,6,7,8,9,10,11,12];
let even = number.filter((num) => {
    return (num%2 == 0); // even -> true odd-> false
});

console.log([2,4,6,8].every((el) => (el%2==0)));
console.log([1,2,4,6,8].every((el) => (el%2==0)));
console.log([2,4,6,8].some((el) => (el%2==0)));
console.log([2,4,6,8].reduce((res,el) => (res + el)));

let maxarr = [1,2,3,4,5,6,6,7,8,9,7,5,23];
let max = maxarr.reduce((max,el) => {
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(max);



function sum(a,b=2){ // default parameter
    return a+b;
}




console.log(Math.min(...arr));


let newArr = [...arr];


let char = "hello";
let newchar = [...char];
console.log(newchar);

let even2 = [2,4,6,8];
let odd = [1,3,5,7];
let combine = [...even2,...odd];


const data = {
    email : "harshhsharmaa57@gmail.com",
    password : "abcd",
};
const datacopy = {...data , id: 12234, country: "INDIA"};

let arr3 =[1,2,3,4,5,6]; //val
let ob1 = {...arr}; // obj -> key value



function sum(...args){
    for(let i=0;i<args.length;i++)
        console.log("you gave us :", args[i]);
}


function min(){
    console.log(arguments); //predefine function
    console.log(arguments.length); 
}

function sum2(...args){
    return args.reduce((sum,el) => sum+el);
}

function min2(msg,...args){
    console.log(msg);
    return args.reduce((min,el) => {
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}

let name = ["tony","steve","peter","bruce","abc","xyz"];
let[winner, runnerup, ...others]= name;

const student2 ={
    name:"harsh",
    age: 19,
    class: "aiml",
    username: "harshhsharmaa",
    password: "abcd",
    city2: "pune",
};
let {username : user, password, city="Mumbai", city2} = student2;
