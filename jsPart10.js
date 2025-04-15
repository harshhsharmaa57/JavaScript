// let btn = document.querySelectorAll("button");

// // // for(btn of btns){
// // //     btn.onclick = sayHello;
// // //     btn.onmouseenter = function(){
// // //         console.log("you enter a button");
// // //     };
// // //     console.dir(btn);
// // // }

// // function sayHello(){
// //     alert("Hello!!");
// // }

// // function sayName(){
// //     alert("harsh");
// // }

// // for(btn of btns){
// //     //btn.addEventListener("click", sayHello);
// //     //btn.addEventListener("click", sayName);
// //     btn.addEventListener("dblclick", function(){
// //         console.log("you clicked twice");
        
// //     });
// // }

// let p = document.querySelector("p");
// // p.addEventListener("click",function(){
// //     console.log("paragraph was clicked");
    
// // });

// let box = document.querySelector(".box");
// // box.addEventListener("mouseenter",function(){
// //     console.log("mouse enter the box");
// // });

// let h3 = document.querySelector("h3");
// let h2 = document.querySelector("h2");


// function changeColor(){
//      console.dir(this.innerText);
//      this.style.backgroundColor ="blue";
// }
// h3.addEventListener("click",changeColor);
// h2.addEventListener("click",changeColor);

//  box.addEventListener("click",changeColor);
//  p.addEventListener("click",changeColor);
//  btn.addEventListener("click",changeColor);


let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    //console.log(event);
    console.log("key =", event.key);
    console.log("code =", event.code);
    console.log("key is pressed");
});

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    console.dir(form);
    let user = this.elements[0]; //form.elements[0];
    let pass = this.elements[1];

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert("form submitted");
});

let user = document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("change event");
    console.log("final change = ", this.value);
});
user.addEventListener("input", function(){
    console.log("input event");
    console.log("input change = ", this.value);
});

let input = document.querySelector("#text");
let p = document.querySelector("#para");
input.addEventListener("input", function(){
    console.log(input.value);
    p.innerText = input.value;
});