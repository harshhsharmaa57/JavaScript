let a = [1,2,3,4,5,6,7,8,9,0];
let n = prompt("enter range");
console.log(a.slice(0,n));
console.log((a.slice(-n)));

let b = prompt("enter something");
let num = b.length;
if (num === 0) {
    console.log("Empty");
} else{
    console.log("Not empty");
}