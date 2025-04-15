// console.log("Hello world");
// console.log("sup");
// let a = 3;
// let b = 4;
// console.log("Sum =", a + b);
// let pencilPrice = 10;
// let eraserPrice = 5;
// console.log("Total price : ", pencilPrice + eraserPrice, "rupees");
// let output = `total price : ${pencilPrice + eraserPrice} Rupees`;
// console.log(output);

// let num = prompt("enter a number : ");
// if(num%10 == 0){
//     console.log("good");
// } else if(num%10 != 0){
//     console.log("bad");
// }

// let name = prompt("enter your name : "); //input in string
// let age = prompt("enter your age :");
// let str = `${name} is ${age} year old`;
// console.log(str);

// let str3 = "apnacollege";
// str3 = str3.slice(2,5); // and index ke ek kam tk ka value aayega
// str3 = str3.slice(5); // 5 se end tk
// str3 = str3.slice(-1); // length - 1
// console.log(str3);

// let msg = "ilovecoding";
// msg = msg.replace("love","do");
// console.log(msg);

// let msg2 = "apnaapnaapna";
// msg2 = msg2.replace("apna","college");
// console.log(msg2); // only first occurance

// let fruit = "mango";
// console.log(fruit.repeat(5)); 

// let string = "Apnacollege";
// // string = string.slice(4).replace('l','t');
// string = string.slice(4).replace('l','t').replace('l','t'); //dono t replace
// console.log(string);

// let arr = ["harsh", "kumar", "sharma"];
// console.log(arr[0][0]); // first index ka first character

// let primary = ["yellow", "red", "blue"];
// let secondary = ["voilet", "pink", "peech"];
// console.log(primary.concat(secondary));   //original array same
// console.log(primary.reverse());   //original array change

// let primary = ["yellow", "red", "blue","voilet", "pink", "peech"];
// console.log(primary.slice()); //original array no change
// console.log(primary.slice(2));
// console.log(primary.slice(2,3));
// console.log(primary.slice(-2));

// let color = ["yellow", "red", "blue","voilet", "pink", "peech"];
// console.log(color.splice(4)); //original array change
//  console.log(color.splice(0,1));
// console.log(color.splice(0,1,"black","grey")); //black grey uss index pr aa jayenge
// console.log(color.splice(1,0,"white","black"));
// console.log(color.splice(1,2));
// color.sort();
// console.log(color);

//  let arr = [[1,2],[3,4],[5,6]];
//  console.log(arr);

let n = prompt("Write a number");
n= parseInt(n);
for(let i = n;i<=n*10; i=i + n){
    console.log(i);
}