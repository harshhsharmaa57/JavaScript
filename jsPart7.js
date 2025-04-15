const student ={
    name : "harsh",
    eng : 55,
    phy: 44,
    chem : 11,
    getAvg(){
        let avg =(this.eng + this.phy + this.chem)/3;
        console.log('${this.name} got avg marks = ${avg}')
    }
};

console.log("hello");
console.log("hello");
// let a=5;
try {
    console.log(a);
} catch(err){ //err na bhi le toh chlega
    console.log("caught an error...");
    console.log(err);
}
console.log("hello2");
console.log("hello2");

const sum = (a,b) => { // () khali bhi chor sakte h
    console.log(a+b);
}

const cube = n => { // () na bhi lgao toh chlega single arg me case me
    console.log(n*n*n);
}

const mul = (a,b) => (
    a*b // implicit return
)


// console.log("Hi there");
// setTimeout(() => {
//     console.log("javascript");
// },4000)
// console.log("Welcome to");


// console.log("Hi there2");
// let id = setInterval(()=>{
//     console.log("js");
// },2000);
// console.log(id);

// let id2= setInterval(()=>{
//     console.log("script");
// },2000);
// console.log(id2);

const student2 ={
    name:"harsh",
    marks:88,
    prop: this, //global scope
    getName : function(){
        console.log(this);
        return (this.name);
    },
    getMarks : () =>{
        console.log(this); // parent's scope --> window
        return (this.marks);
    },
    getInfo : function() {
        setTimeout (()=>{
            console.log(this); // student obj
        },2000);
    },
    getInfo2 : function(){
        setTimeout(function(){
            console.log(this); // window obj
        },2000);
    },
};